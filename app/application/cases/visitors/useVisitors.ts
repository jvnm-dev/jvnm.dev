import { useCallback, useEffect, useState } from "react";
import { useLocation } from "remix";
import io, { Socket } from "socket.io-client";

import { API_URL } from "~/services/api";
import { Visitor } from "~/domain/visitor";
import { throttle } from "~/lib/function";
import { getVisitorName } from "~/lib/visitor";

export const useVisitor = () => {
  const [me, setMe] = useState<Partial<Visitor>>({
    id: "",
    x: 0,
    y: 0,
    location: "",
  });
  const [socket, setSocket] = useState<Socket>();
  const location = useLocation();

  const updateMouse = useCallback(
    (visitor: Visitor) => {
      if (!visitor.id?.length) return;
      if (
        visitor.x >
        document.documentElement.clientWidth +
          document.documentElement.scrollWidth
      )
        visitor.x =
          document.documentElement.clientWidth +
          document.documentElement.scrollWidth;

      if (
        visitor.y >
        document.documentElement.clientHeight +
          document.documentElement.scrollHeight
      )
        visitor.y =
          document.documentElement.clientHeight +
          document.documentElement.scrollHeight;

      const getMouse = () => document.getElementById(`mouse-${visitor.id}`);

      if (visitor.location !== window.location.pathname) {
        // Remove mouse from previous location
        getMouse()?.remove();
      }

      if (
        !getMouse() &&
        socket?.id &&
        visitor.id !== socket.id &&
        visitor.location === window.location.pathname
      ) {
        // Add a new mouse into the DOM
        const newMouse = document.createElement("object");
        newMouse.type = "image/svg+xml";
        newMouse.data = "/images/cursor.svg";
        newMouse.id = `mouse-${visitor.id}`;
        newMouse.style.height = "20px";
        newMouse.style.width = "20px";
        newMouse.style.position = "absolute";
        newMouse.style.left = `${visitor.x}px`;
        newMouse.style.top = `${visitor.y}px`;
        newMouse.style.zIndex = "9999";
        newMouse.dataset["name"] = getVisitorName(visitor);

        newMouse.addEventListener("mouseenter", (e) => {
          const tag = document.createElement("div");
          tag.id = "tag";
          tag.innerHTML = newMouse.dataset["name"] ?? "Unknown";
          tag.style.position = "absolute";
          tag.style.zIndex = "99999";
          tag.style.backgroundColor = "rgba(0,0,0,0.5)";
          tag.style.color = "white";
          tag.style.padding = "10px";
          tag.style.borderRadius = "5px";
          tag.style.fontSize = "20px";
          tag.style.fontWeight = "bold";
          tag.style.textAlign = "center";
          tag.style.left = `${(e.clientX ?? 0) + 10}px`;
          tag.style.top = `${(e.clientY ?? 0) + 10}px`;
          document.body.appendChild(tag);
        });

        newMouse.addEventListener("mouseleave", () => {
          document.getElementById("tag")?.remove();
        });

        document.body.appendChild(newMouse);
      }

      const mouse = getMouse();

      if (mouse) {
        // Animate the mouse to the new position
        const mouseAnimation = (
          mouse: HTMLElement,
          x: number,
          y: number,
          duration: number
        ) => {
          const start = performance.now();
          const startX = mouse.offsetLeft;
          const startY = mouse.offsetTop;
          const distanceX = x - startX;
          const distanceY = y - startY;
          const move = (timestamp: number) => {
            const progress = timestamp - start;
            const percent = progress / duration;
            mouse.style.left = `${startX + distanceX * percent}px`;
            mouse.style.top = `${startY + distanceY * percent}px`;
            if (progress < duration) {
              window.requestAnimationFrame(move);
            }
          };

          window.requestAnimationFrame(move);
        };

        mouseAnimation(mouse, visitor.x - 4, visitor.y - 4, 400);

        (mouse as HTMLObjectElement)
          .getSVGDocument()
          ?.querySelector("#cursor")
          ?.setAttribute("fill", visitor.color);
      }
    },
    [me, socket]
  );

  const setMeThrottled: React.Dispatch<React.SetStateAction<Partial<Visitor>>> =
    throttle(setMe, 500);

  const update = (socketToUpdate?: Socket, payload?: Partial<Visitor>) => {
    socketToUpdate?.emit("update", payload);
  };

  useEffect(() => {
    setSocket(io(API_URL));
  }, []);

  useEffect(() => {
    update(socket, me);
  }, [socket, me]);

  useEffect(() => {
    // Use location to update "me"'s location but don't use the Remix one to avoid to put it
    // in below useEffect deps (it will redeclare events etc.)
    setMe((prev) => ({
      ...prev,
      location: window.location.pathname,
    }));
  }, [location]);

  useEffect(() => {
    if (socket) {
      socket.on("joined", (payload) => {
        if (socket.id !== payload.id) {
          setMeThrottled((prev) => ({
            ...prev,
            id: payload.id,
            color: payload.color,
            name: payload.name,
          }));

          console.info(`[Visitor ${getVisitorName(payload)}] joined`, payload);
          updateMouse(payload);
        }
      });

      socket.on("update", (payload) => {
        if (socket.id !== payload.id) {
          console.info(`[Visitor ${getVisitorName(payload)}] updated`, payload);
          updateMouse(payload);
        }
      });

      socket.on("leaved", (payload) => {
        const mouse = document.getElementById(`mouse-${payload.id}`);
        if (mouse) {
          console.info(`[Visitor ${getVisitorName(payload)}] leaved`, payload);
          document.body.removeChild(mouse);
        }
      });

      document.addEventListener("mousemove", (e) => {
        const data = {
          id: socket.id,
          x: e.pageX,
          y: e.pageY,
        };

        setMeThrottled((prev) => ({
          ...prev,
          ...data,
        }));
      });

      window.addEventListener("beforeunload", function () {
        socket?.disconnect();
      });
    }
  }, [socket]);
};

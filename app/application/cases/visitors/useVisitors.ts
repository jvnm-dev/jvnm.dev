import { useEffect, useState } from "react";
import { useLocation } from "remix";
import io, { Socket } from "socket.io-client";
import { Location } from "history";

import { Visitor } from "~/domain/visitor";

export const useVisitor = () => {
  const [socket, setSocket] = useState<Socket>();
  const [previousLocation, setPreviousLocation] = useState<Location>();
  const location = useLocation();

  const disconnect = () => {
    socket?.emit("disconnectToServer");
    socket?.disconnect();
    document.querySelector(`mouse-${socket?.id}`)?.remove();
  };

  useEffect(() => {
    if (socket && location.pathname !== previousLocation?.pathname) {
      disconnect();
    }

    setPreviousLocation(location);

    return () => {
      disconnect();
    };
  }, [location, socket]);

  let mousePosition = {
    x: 0,
    y: 0,
  };

  const getMousePosition = () => mousePosition;

  const moveMouseToPosition = (visitor: Visitor) => {
    const getMouse = () => {
      return document.getElementById(`mouse-${visitor.id}`);
    };

    if (!getMouse() && socket?.id && visitor.id !== socket.id) {
      // Add a new mouse into the DOM
      const newMouse = document.createElement("object");
      newMouse.type = "image/svg+xml";
      newMouse.data = "/images/cursor.svg";
      newMouse.id = `mouse-${visitor.id}`;
      newMouse.style.height = "20px";
      newMouse.style.width = "20px";
      newMouse.style.position = "absolute";
      newMouse.style.zIndex = "9999";

      document.body.appendChild(newMouse);
    }

    const mouse = getMouse();

    if (mouse) {
      mouse.style.left = `${visitor.x - 4}px`;
      mouse.style.top = `${visitor.y - 4}px`;
      (mouse as HTMLObjectElement)
        .getSVGDocument()
        ?.querySelector("#cursor")
        ?.setAttribute("fill", visitor.color);
    }
  };

  useEffect(() => {
    setSocket(io("http://localhost:3000"));
  }, []);

  useEffect(() => {
    let moveMouse: (payload: any) => void;

    if (socket) {
      socket?.on("connected", (payload) => {
        if (socket.id !== payload.id) {
          moveMouseToPosition(payload);
        }
      });

      socket?.on("positionChangedClient", (payload) => {
        if (socket.id !== payload.id) {
          moveMouseToPosition(payload);
        }
      });

      moveMouse = (payload) => {
        socket?.emit("positionChangedServer", payload);
      };

      document.addEventListener("mousemove", (e) => {
        mousePosition = {
          x: e.clientX,
          y: e.clientY,
        };

        const payload: Partial<Visitor> = {
          id: socket.id,
          x: e.pageX,
          y: e.pageY,
        };

        moveMouse(payload);
      });

      document.addEventListener("scroll", () => {
        const payload: Partial<Visitor> = {
          id: socket.id,
          x: getMousePosition().x + window.scrollX,
          y: getMousePosition().y + window.scrollY,
        };

        moveMouse(payload);
      });

      socket.on("disconnectToClient", (payload) => {
        const mouse = document.getElementById(`mouse-${payload.id}`);

        if (mouse) {
          document.body.removeChild(mouse);
        }
      });
    }

    window.onbeforeunload = () => {
      disconnect();
      document.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("scroll", moveMouse);
    };
  }, [socket]);

  return socket;
};

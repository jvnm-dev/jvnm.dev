import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Typography } from "~/ui/components/common/Typography";
import Image from "~/ui/svg/about.svg";

export const Jumbotron = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 1280 });
  const shouldShowImage = useMediaQuery({ minWidth: 1025 });
  const [subtitleWidth, setSubtitleWidth] = useState(0);

  useEffect(() => {
    setSubtitleWidth(isLargeDevice ? 550 : 450);
  }, [isLargeDevice]);

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-20">
      <div className="flex flex-col justify-center">
        <Typography
          variant="title"
          level={1}
          className="font-bold dark:text-slate-100 text-8xl xl:text-9xl"
        >
          Software Engineer
        </Typography>
        <Typography
          variant="title"
          level={3}
          className="mt-8 leading-8 text-gray-500 dark:text-slate-100"
          style={{ width: subtitleWidth }}
        >
          In consultancy at{" "}
          <a
            href="https://www.haulogy.net/"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-haulogy-blue via-haulogy-purple to-haulogy-orange"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haulogy
          </a>
          , a company that offers IT solutions both to Distribution Network
          Managers and energy suppliers.
        </Typography>

        <Typography
          variant="title"
          level={3}
          className="mt-8 leading-8 text-gray-500 dark:text-slate-100"
          style={{ width: subtitleWidth }}
        >
          Also studying Computer Sciences at{" "}
          <a
            href="https://web.umons.ac.be/fr/"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-umons-red to-umons-red2"
            target="_blank"
            rel="noopener noreferrer"
          >
            UMons
          </a>
          , to validate my skills and knowledge.
        </Typography>
      </div>

      {shouldShowImage && (
        <div className="flex justify-center items-center">
          <img src="/images/about.svg" alt="about" style={{ height: "90%" }} />
        </div>
      )}
    </div>
  );
};

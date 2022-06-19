import { useMediaQuery } from "react-responsive";
import { Typography } from "~/application/ui/components/common/Typography";

export const Jumbotron = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 1280 });
  const shouldShowImage = useMediaQuery({ minWidth: 1025 });

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
          style={{ width: isLargeDevice ? 550 : 400 }}
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
      </div>

      {shouldShowImage && (
        <div className="flex justify-center items-center">
          <img src="/images/about.svg" alt="about" className="h-96" />
        </div>
      )}
    </div>
  );
};

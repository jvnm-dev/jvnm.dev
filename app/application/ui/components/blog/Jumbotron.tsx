import { useMediaQuery } from "react-responsive";
import { Typography } from "~/application/ui/components/common/Typography";

export const Jumbotron = () => {
  const shouldShowImage = useMediaQuery({ minWidth: 1025 });

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-20">
      <div className="flex flex-col justify-center">
        <Typography
          variant="title"
          level={1}
          className="font-bold dark:text-slate-100 text-7xl xl:text-8xl"
        >
          Welcome to my blog!
        </Typography>
        <Typography
          variant="title"
          level={2}
          className="mt-8 dark:text-slate-100"
          style={{ width: 500 }}
        >
          Learn and stay tuned about web development, React, and more.
        </Typography>
        <Typography variant="title" level={1} className="mt-8 text-indigo-300">
          Find my latests posts below.
        </Typography>
      </div>
      {shouldShowImage && (
        <div
          className="justify-center items-center hidden"
          style={{
            display: shouldShowImage ? "flex" : "none",
          }}
        >
          <img src="/images/blog.svg" alt="welcome" className="h-96" />
        </div>
      )}
    </div>
  );
};

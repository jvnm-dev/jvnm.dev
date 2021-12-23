import { Typography } from "~/application/ui/components/common/Typography";

export const Jumbotron = () => {
  return (
    <div className="grid gap-4 grid-cols-2 my-20">
      <div className="flex flex-col justify-center">
        <Typography
          variant="title"
          level={1}
          className="text-8xl font-bold dark:text-slate-100"
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
      <div className="flex justify-center items-center">
        <img src="/images/blog.svg" alt="welcome" className="h-96" />
      </div>
    </div>
  );
};

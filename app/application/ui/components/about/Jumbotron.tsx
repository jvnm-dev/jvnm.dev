import { Typography } from "~/application/ui/components/common/Typography";

export const Jumbotron = () => {
  return (
    <div className="grid gap-4 grid-cols-2 my-20">
      <div className="flex flex-col justify-center">
        <Typography
          variant="title"
          level={1}
          className="text-9xl font-bold dark:text-slate-100"
        >
          Software Engineer
        </Typography>
        <Typography
          variant="title"
          level={3}
          className="mt-8 leading-8 text-gray-500 dark:text-slate-300"
          style={{ width: 550 }}
        >
          In consultancy at{" "}
          <a
            href="https://www.haulogy.net/"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haulogy
          </a>
          , a company that offers IT solutions both to Distribution Network
          Managers and energy suppliers.
        </Typography>
      </div>

      <div className="flex justify-center items-center">
        <img src="/images/about.svg" alt="welcome" />
      </div>
    </div>
  );
};

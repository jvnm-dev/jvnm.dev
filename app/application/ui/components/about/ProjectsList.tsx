import { FaCode, FaEye } from "react-icons/fa";

import { Development } from "~/domain/development";

import { Typography } from "~/application/ui/components/common/Typography";

interface IOwnProps {
  developments: Development[];
}

export const ProjectsList = ({ developments }: IOwnProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {developments.map((development) => {
        return (
          <div className="mb-4 bg-white bg-opacity-50 rounded-lg shadow-lg hover:bg-opacity-100 transition ease-in-out duration-500 dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/25">
            <div className="flex items-center h-full">
              <img
                src={development.image}
                alt={development.name}
                className="h-48 rounded-l-lg shadow-md"
              />
              <div className="m-4">
                <Typography
                  variant="title"
                  level={3}
                  className="font-normal mb-4"
                >
                  {development.name}
                </Typography>
                <Typography variant="title" level={6} className="font-normal">
                  {development.description}
                </Typography>
              </div>
              <div className="flex-1 flex flex-col justify-end h-full">
                <a
                  className="h-full hoverableButton"
                  href={development.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-full">
                    <span className="cursor-pointer button px-4 h-full experience-button">
                      <FaEye />
                    </span>
                  </div>
                </a>
                <a
                  className="h-full hoverableButton"
                  href={development.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-full">
                    <span className="cursor-pointer button px-4 h-full experience-button">
                      <FaCode />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

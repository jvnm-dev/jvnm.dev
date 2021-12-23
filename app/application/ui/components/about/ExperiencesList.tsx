import { FaArrowRight } from "react-icons/fa";

import { formatDate } from "~/lib/date";

import { Experience } from "~/domain/experience";

import { Typography } from "~/application/ui/components/common/Typography";
import { useGetExperienceLink } from "~/application/cases/experiences/getExperienceLink";

interface IOwnProps {
  experiences: Experience[];
}

export const ExperiencesList = ({ experiences }: IOwnProps) => {
  const { getExperienceLink } = useGetExperienceLink();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {experiences.map((experience) => (
        <a
          key={experience.id}
          href={getExperienceLink(experience)}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 bg-white bg-opacity-50 rounded-lg shadow-lg hover:bg-opacity-100 transition ease-in-out duration-500 hoverableButton cursor-pointer dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/25"
        >
          <div className="flex items-center h-full">
            <img
              src={experience.image}
              alt={experience.place}
              className="h-16 rounded-lg shadow-md m-4 dark:shadow-indigo-500/25"
            />
            <div className="m-4 ml-0">
              <Typography variant="title" level={3} className="font-normal">
                {experience.role}
              </Typography>
              <Typography>
                {formatDate(experience.dateFrom)} -{" "}
                {formatDate(experience.dateTo)}
              </Typography>
            </div>
            <div className="flex-1 flex justify-end h-full">
              <span className="cursor-pointer button px-4 h-full rounded-r-lg experience-button">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

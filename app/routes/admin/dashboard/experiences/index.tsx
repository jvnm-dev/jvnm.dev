import { Link, useLoaderData } from "@remix-run/react";
import { FaPlus } from "react-icons/fa";

import { formatDate } from "~/lib/date";

import { Typography } from "~/ui/components/common/Typography";

import { Experience } from "~/domain/experience";

import { useExperiences } from "~/services/experienceAdapter";

export async function loader() {
  const { getExperiences } = useExperiences();

  const experiences = await getExperiences();

  return { experiences };
}

const AdminExperiences = () => {
  const { experiences } = useLoaderData();

  return (
    <div className="w-1/2">
      <div className="mb-6 flex justify-between align-middle">
        <Typography variant="title" level={1} className="font-bold">
          Experiences
        </Typography>
        <Link to="/admin/dashboard/experiences/add" className="hoverableButton">
          <div>
            <span className="cursor-pointer button p-2">
              <FaPlus className="mr-2" /> Add a new experience
            </span>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-1 w-full">
        {experiences.map((experience: Experience) => (
          <Link
            key={`${experience.place}`}
            to={`/admin/dashboard/experiences/edit/${experience.id}`}
            className="relative mb-4 bg-white bg-opacity-50 rounded-lg shadow-lg hover:bg-opacity-100 transition ease-in-out duration-500 hoverableButton cursor-pointer dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/25"
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
                  Edit
                </span>
              </div>

              {experience.isExtiaConsulting && (
                <div className="absolute flex-1 flex bottom-0 left-[50%] bg-gradient-to-br translate-x-[-50%] from-[#ED7003] to-[#EF7E02] rounded-tl-lg rounded-tr-lg text-sm pl-4 pr-4">
                  <span className="text-white">Extia consulting</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminExperiences;

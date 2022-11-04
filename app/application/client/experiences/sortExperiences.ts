import dayjs from "dayjs";
import { Experience } from "~/domain/experience";

export const useSortExperiences = () => {
  const sortExperiences = (experiences: Experience[]) => {
    if (!experiences?.length) {
      return [];
    }

    return experiences.sort((a, b) => {
      return dayjs(b.dateFrom).diff(dayjs(a.dateFrom));
    });
  };

  return { sortExperiences };
};

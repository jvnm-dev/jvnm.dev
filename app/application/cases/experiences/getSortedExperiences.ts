import { Experience } from "~/domain/experience";

export const useGetSortedExperiences = () => {
  const getSortedExperiences = (experiences: Experience[]) => {
    if (!experiences?.length) {
      return [];
    }

    return experiences.sort((a, b) => {
      const dateA = new Date(a.dateFrom);
      const dateB = new Date(b.dateFrom);

      return dateB.getTime() - dateA.getTime();
    });
  };

  return { getSortedExperiences };
};

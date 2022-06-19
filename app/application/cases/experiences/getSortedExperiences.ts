import { Experience } from "~/domain/experience";

export const useGetSortedExperiences = () => {
  const getSortedExperiences = (experiences: Experience[]) => {
    if (!experiences?.length) {
      return [];
    }

    return experiences.sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });
  };

  return { getSortedExperiences };
};

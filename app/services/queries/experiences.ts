import { Experience } from "~/domain/experience";
import { getCollection } from "~/services/api";

export const key = "experiences";

export type ExperiencesQuery = {
  run: () => Promise<Experience[]>;
};

export const useExperiencesQuery = (): ExperiencesQuery => {
  const fetchExperiences = async (): Promise<Experience[]> => {
    return getCollection(key);
  };

  return {
    run: async (): Promise<Experience[]> => fetchExperiences(),
  };
};

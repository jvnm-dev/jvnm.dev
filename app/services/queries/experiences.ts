import { Experience } from "~/domain/experience";

import { useAPIClient } from "~/services/api";
import { GET_EXPERIENCES } from "~/services/graphql/schemas/experiences";

export type ExperiencesQuery = {
  run: () => Promise<Experience[]>;
};

export const useExperiencesQuery = (): ExperiencesQuery => {
  const fetchExperiences = async (): Promise<Experience[]> => {
    const { experiences } = await useAPIClient().request(GET_EXPERIENCES);
    return experiences;
  };

  return {
    run: async (): Promise<Experience[]> => fetchExperiences(),
  };
};

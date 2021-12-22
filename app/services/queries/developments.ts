import { Development } from "~/domain/development";

import { useAPIClient } from "~/services/api";
import { GET_DEVELOPMENTS } from "~/services/graphql/schemas/developments";

export type DevelopmentsQuery = {
  run: () => Promise<Development[]>;
};

export const useDevelopmentsQuery = (): DevelopmentsQuery => {
  const fetchDevelopments = async (): Promise<Development[]> => {
    const { developments } = await useAPIClient().request(GET_DEVELOPMENTS);
    return developments;
  };

  return {
    run: async (): Promise<Development[]> => fetchDevelopments(),
  };
};

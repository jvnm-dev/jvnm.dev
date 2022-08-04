import { Development } from "~/domain/development";
import { getCollection } from "~/services/api";

export const key = "developments";

export type DevelopmentsQuery = {
  run: () => Promise<Development[]>;
};

export const useDevelopmentsQuery = (): DevelopmentsQuery => {
  const fetchDevelopments = async (): Promise<Development[]> => {
    return getCollection(key);
  };

  return {
    run: async (): Promise<Development[]> => fetchDevelopments(),
  };
};

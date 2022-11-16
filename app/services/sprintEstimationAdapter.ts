import { SprintEstimationService } from "~/application/ports";

import {
  SprintEstimation,
  SprintEstimationsKey,
} from "~/domain/sprintEstimation";

import {
  addDocument,
  deleteDocument,
  updateDocument,
} from "~/services/firebaseAdapter";

const addSprintEstimation = () => {
  return addDocument<SprintEstimation>(SprintEstimationsKey, {
    name: "John Doe",
    value: "0",
  } as SprintEstimation);
};

const updateSprintEstimation = (sprintEstimation: SprintEstimation) => {
  return updateDocument<SprintEstimation>(
    SprintEstimationsKey,
    sprintEstimation.id,
    sprintEstimation
  );
};

const deleteSprintEstimation = (id: string) => {
  return deleteDocument(SprintEstimationsKey, id);
};

export const useSprintEstimation = (): SprintEstimationService => {
  return {
    addSprintEstimation,
    updateSprintEstimation,
    deleteSprintEstimation,
  };
};

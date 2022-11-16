import { SprintEstimation } from "~/domain/sprintEstimation";

export const useComputeSprintEstimationMean = () => {
  const computeSprintEstimationMean = (
    sprintEstimations: SprintEstimation[]
  ) => {
    return (
      (sprintEstimations.reduce(
        (acc, sprintEstimation) =>
          acc + Number(sprintEstimation.value.replace(",", ".")),
        0
      ) ?? 0) / (sprintEstimations.length ?? 1)
    ).toFixed(2);
  };

  return { computeSprintEstimationMean };
};

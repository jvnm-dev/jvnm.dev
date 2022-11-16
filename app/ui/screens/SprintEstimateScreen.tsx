import { createRef, useEffect, useRef, useState } from "react";
import { FaPlus, FaSave, FaTrashAlt } from "react-icons/fa";

import {
  SprintEstimation,
  SprintEstimationsKey,
} from "~/domain/sprintEstimation";

import { listenToCollection } from "~/services/firebaseAdapter";
import { useSprintEstimation } from "~/services/sprintEstimationAdapter";

import { useComputeSprintEstimationMean } from "~/application/client/sprintEstimations/computeSprintEstimationMean";

import { Container } from "~/ui/components/common/Container";
import { Typography } from "~/ui/components/common/Typography";

export const SprintEstimateScreen = () => {
  const [sprintEstimations, setSprintEstimations] = useState<
    SprintEstimation[]
  >([]);

  const namesRefs = useRef<HTMLInputElement[]>([]);
  const valuesRefs = useRef<HTMLInputElement[]>([]);

  const {
    addSprintEstimation,
    updateSprintEstimation,
    deleteSprintEstimation,
  } = useSprintEstimation();

  const { computeSprintEstimationMean } = useComputeSprintEstimationMean();

  useEffect(() => {
    listenToCollection<SprintEstimation>(SprintEstimationsKey, (newData) => {
      setSprintEstimations(newData);
    });
  }, []);

  useEffect(() => {
    sprintEstimations.forEach((sprintEstimation, index) => {
      const nameInput = namesRefs?.current?.[index];
      const valueInput = valuesRefs?.current?.[index];

      if (nameInput) {
        nameInput.value = sprintEstimation.name;
        nameInput.dataset.dirty = "false";
      }

      if (valueInput) {
        valueInput.value = sprintEstimation.value;
        valueInput.dataset.dirty = "false";
      }
    });
  }, [sprintEstimations]);

  return (
    <Container>
      <div className="flex flex-col items-center w-full">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full z-[2]">
          <div className="flex items-center justify-between">
            <Typography
              variant="title"
              level={2}
              className="dark:text-slate-100"
            >
              Real-time sprint estimation tool
            </Typography>

            <button className="hoverableButton" onClick={addSprintEstimation}>
              <div>
                <span className="cursor-pointer button primary p-2">
                  <FaPlus className="mr-2" /> Add collaborator
                </span>
              </div>
            </button>
          </div>

          <Typography className="dark:text-slate-100">
            Add collaborators, give them a name. Each collaborator must change
            his dedicated value to adjust the mean.
          </Typography>

          <Typography className="mt-4 dark:text-slate-100 flex items-center">
            <strong>Tip</strong>: The{" "}
            <FaSave className="text-blue-300 ml-1 mr-1" /> icon means that you
            must press{" "}
            <kbd className="ml-1 mr-1 px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Enter
            </kbd>{" "}
            to send the new value.
          </Typography>
        </div>

        <div className="mt-[-10px] bg-white rounded-lg shadow-lg p-4 w-[95%]">
          {sprintEstimations.map((sprintEstimation, index) => (
            <div
              key={sprintEstimation.id}
              className="mt-4 flex items-center justify-between bg-white rounded-lg shadow-lg p-4"
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center">
                  <input
                    id={`estimation-name-${sprintEstimation.id}`}
                    ref={(element) => {
                      if (element) {
                        namesRefs.current[index] = element;
                      }
                    }}
                    defaultValue={sprintEstimation.name}
                    onChange={() => {
                      namesRefs.current[index].dataset.dirty = "true";
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        updateSprintEstimation({
                          ...sprintEstimation,
                          name: e.currentTarget.value,
                        });
                      }
                    }}
                  />
                  <div>
                    <FaSave className="text-blue-300" />
                  </div>
                </div>
                <FaTrashAlt
                  className="ml-4 text-red-500 cursor-pointer"
                  onClick={() => deleteSprintEstimation(sprintEstimation.id)}
                />
              </div>

              <div className="flex items-center justify-center">
                <input
                  id={`estimation-value-${sprintEstimation.id}`}
                  ref={(element) => {
                    if (element) {
                      valuesRefs.current[index] = element;
                    }
                  }}
                  defaultValue={sprintEstimation.value}
                  onChange={() => {
                    valuesRefs.current[index].dataset.dirty = "true";
                  }}
                  className="text-right"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      updateSprintEstimation({
                        ...sprintEstimation,
                        value: e.currentTarget.value,
                      });
                    }
                  }}
                />
                <div>
                  <FaSave className="text-blue-300" />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 flex items-center justify-between bg-indigo-500 text-white rounded-lg shadow-lg p-4">
            <Typography
              variant="title"
              level={4}
              className="dark:text-slate-100"
            >
              Total
            </Typography>

            <Typography
              variant="title"
              level={4}
              className="dark:text-slate-100"
            >
              {computeSprintEstimationMean(sprintEstimations)}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

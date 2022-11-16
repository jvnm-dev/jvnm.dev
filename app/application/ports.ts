import { TypedResponse } from "@remix-run/node";
import { Experience } from "~/domain/experience";
import { SprintEstimation } from "~/domain/sprintEstimation";

export type ExperienceService = {
  getExperience: (id: string) => Promise<Experience>;
  getExperiences: () => Promise<Experience[]>;
  addExperience: (formData: FormData) => Promise<TypedResponse<never>>;
  deleteExperience: (id: string) => Promise<TypedResponse<never>>;
};

export type AuthService = {
  verifySession: (request: Request) => Promise<boolean>;
  checkSession: (request: Request) => Promise<Response | TypedResponse<never>>;
  commitSession: (
    request: Request,
    user: any
  ) => Promise<TypedResponse<never> | undefined>;
  destroySession: (request: Request) => Promise<TypedResponse<never>>;
};

export type SprintEstimationService = {
  addSprintEstimation: () => Promise<SprintEstimation>;
  updateSprintEstimation: (
    sprintEstimation: SprintEstimation
  ) => Promise<SprintEstimation>;
  deleteSprintEstimation: (id: string) => Promise<void>;
};

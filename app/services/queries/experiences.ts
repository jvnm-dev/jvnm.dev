import { redirect, TypedResponse } from "@remix-run/node";

import { Experience } from "~/domain/experience";
import { serializeFormData } from "~/lib/form";
import {
  addDocument,
  deleteDocument,
  getCollection,
  getDocument,
} from "~/services/api";

export const key = "experiences";

export type ExperiencesQuery = {
  run: () => Promise<Experience[]>;
};

export const useExperiencesQuery = (): ExperiencesQuery => {
  const fetchExperiences = async (): Promise<Experience[]> => {
    return getCollection(key);
  };

  return {
    run: () => fetchExperiences(),
  };
};

export type AddExperienceQuery = {
  run: (formData: FormData) => Promise<TypedResponse<never>>;
};

export const useAddExperienceQuery = (): AddExperienceQuery => {
  const addExperience = async (
    formData: FormData
  ): Promise<TypedResponse<never>> => {
    formData.delete("action");
    const experience = serializeFormData<Experience>(formData);

    await addDocument(key, experience);

    return redirect("/admin/dashboard/experiences");
  };

  return {
    run: (formData: FormData) => addExperience(formData),
  };
};

export type ExperienceQuery = {
  run: (id: string) => Promise<Experience>;
};

export const useExperienceQuery = (): ExperienceQuery => {
  const fetchExperience = async (id: string): Promise<Experience> => {
    return getDocument(key, id);
  };

  return {
    run: (id) => fetchExperience(id),
  };
};

export type DeleteExperienceQuery = {
  run: (id: string) => Promise<TypedResponse<never>>;
};

export const useDeleteExperienceQuery = (): DeleteExperienceQuery => {
  const deleteExperience = async (
    id: string
  ): Promise<TypedResponse<never>> => {
    await deleteDocument(key, id);

    return redirect("/admin/dashboard/experiences");
  };

  return {
    run: (id) => deleteExperience(id),
  };
};

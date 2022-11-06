import { redirect, TypedResponse } from "@remix-run/node";
import { Experience, ExperiencesKey } from "~/domain/experience";

import { serializeFormData } from "~/lib/form";

import {
  addDocument,
  deleteDocument,
  getCollection,
  getDocument,
} from "~/services/firebaseAdapter";

export const getExperiences = async (): Promise<Experience[]> => {
  return getCollection(ExperiencesKey);
};

export const getExperience = async (id: string): Promise<Experience> => {
  return getDocument(ExperiencesKey, id);
};

export const addExperience = async (
  formData: FormData
): Promise<TypedResponse<never>> => {
  formData.delete("action");
  const experience = serializeFormData<Experience>(formData);

  await addDocument(ExperiencesKey, experience);

  return redirect("/admin/dashboard/experiences");
};

export const deleteExperience = async (
  id: string
): Promise<TypedResponse<never>> => {
  await deleteDocument(ExperiencesKey, id);

  return redirect("/admin/dashboard/experiences");
};

export const useExperiences = () => ({
  getExperience,
  addExperience,
  getExperiences,
  deleteExperience,
});

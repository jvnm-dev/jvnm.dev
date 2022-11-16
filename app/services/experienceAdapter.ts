import { redirect } from "@remix-run/node";
import { ExperienceService } from "~/application/ports";
import { Experience, ExperiencesKey } from "~/domain/experience";

import { serializeFormData } from "~/lib/form";

import {
  addDocument,
  deleteDocument,
  getCollection,
  getDocument,
} from "~/services/firebaseAdapter";

export const getExperiences: ExperienceService["getExperiences"] = () => {
  return getCollection(ExperiencesKey);
};

export const getExperience: ExperienceService["getExperience"] = (id) => {
  return getDocument(ExperiencesKey, id);
};

export const addExperience: ExperienceService["addExperience"] = async (
  formData
) => {
  formData.delete("action");
  const experience = serializeFormData<Experience>(formData);

  await addDocument(ExperiencesKey, experience);

  return redirect("/admin/dashboard/experiences");
};

export const deleteExperience: ExperienceService["deleteExperience"] = async (
  id
) => {
  await deleteDocument(ExperiencesKey, id);

  return redirect("/admin/dashboard/experiences");
};

export const useExperiences = (): ExperienceService => ({
  getExperience,
  addExperience,
  getExperiences,
  deleteExperience,
});

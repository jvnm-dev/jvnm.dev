import { redirect, TypedResponse } from "@remix-run/node";

import { Experience } from "~/domain/experience";
import { serializeFormData } from "~/lib/form";
import { addDocument, getCollection } from "~/services/api";

export const key = "experiences";

export type ExperiencesQuery = {
  run: () => Promise<Experience[]>;
};

export const useExperiencesQuery = (): ExperiencesQuery => {
  const fetchExperiences = async (): Promise<Experience[]> => {
    return getCollection(key);
  };

  return {
    run: async (): Promise<Experience[]> => fetchExperiences(),
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

    return redirect("/admin/dashboard");
  };

  return {
    run: async (formData: FormData): Promise<TypedResponse<never>> =>
      addExperience(formData),
  };
};

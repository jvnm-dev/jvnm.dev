export const serializeFormData = <T>(formData: FormData): T => {
  return Object.fromEntries(formData) as T;
};

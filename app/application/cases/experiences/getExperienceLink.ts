import { Experience } from "~/domain/experience";

export const useGetExperienceLink = () => {
  const getExperienceLink = (experience: Experience) => {
    switch (experience.place.toLowerCase()) {
      case "heh":
        return "https://heh.be";
      case "shippr":
        return "https://shippr.io";
      case "odoo":
        return "https://odoo.com";
      case "extia":
        return "https://extia.fr";
    }
  };

  return { getExperienceLink };
};

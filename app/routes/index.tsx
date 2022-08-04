import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Experience } from "~/domain/experience";
import { Development } from "~/domain/development";

import { AboutScreen } from "~/application/ui/screens/AboutScreen";

import { useExperiencesQuery } from "~/services/queries/experiences";
import { useDevelopmentsQuery } from "~/services/queries/developments";
import { useGetSortedExperiences } from "~/application/cases/experiences/getSortedExperiences";

type LoaderData = {
  experiences: Experience[];
  developments: Development[];
};

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "A blog about web development, React, and more.",
});

export let loader: LoaderFunction = async (): Promise<LoaderData> => ({
  experiences: await useExperiencesQuery().run(),
  developments: await useDevelopmentsQuery().run(),
});

const About = () => {
  const { getSortedExperiences } = useGetSortedExperiences();
  const { experiences, developments } = useLoaderData<LoaderData>();
  const sortedExperiences = getSortedExperiences(experiences);

  return (
    <AboutScreen experiences={sortedExperiences} developments={developments} />
  );
};

export default About;

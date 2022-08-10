import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Experience } from "~/domain/experience";
import { Development } from "~/domain/development";

import { Header } from "~/application/ui/components/common/Header";
import { Footer } from "~/application/ui/components/common/Footer";
import { AboutScreen } from "~/application/ui/screens/AboutScreen";

import { useExperiencesQuery } from "~/services/queries/experiences";
import { useDevelopmentsQuery } from "~/services/queries/developments";
import { useGetSortedExperiences } from "~/application/cases/experiences/getSortedExperiences";
import { useEffect, useState } from "react";

type LoaderData = {
  experiences: Experience[];
  developments: Development[];
};

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export let loader: LoaderFunction = async (): Promise<LoaderData> => ({
  experiences: await useExperiencesQuery().run(),
  developments: await useDevelopmentsQuery().run(),
});

const About = () => {
  const { getSortedExperiences } = useGetSortedExperiences();
  const { experiences, developments } = useLoaderData<LoaderData>();
  const sortedExperiences = getSortedExperiences(experiences);

  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (
        e.key.toLowerCase() === "t" ||
        e.key.toLowerCase() === "e" ||
        e.key.toLowerCase() === "k"
      ) {
        setKeys([...keys, e.key.toLowerCase()]);
      } else {
        setKeys([]);
      }
    };

    return () => {
      window.onkeydown = null;
      window.onkeyup = null;
    };
  }, [keys, setKeys]);

  useEffect(() => {
    const [first, second, third] = keys;

    if (first === "t" && second === "e" && third === "k") {
      window.location.href = "/admin";
    }
  }, [keys]);

  return (
    <>
      <Header />
      <AboutScreen
        experiences={sortedExperiences}
        developments={developments}
      />
      <Footer />
    </>
  );
};

export default About;

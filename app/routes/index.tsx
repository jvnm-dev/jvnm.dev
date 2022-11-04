import { useEffect, useState } from "react";
import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Experience } from "~/domain/experience";

import { Header } from "~/ui/components/common/Header";
import { Footer } from "~/ui/components/common/Footer";
import { AboutScreen } from "~/ui/screens/AboutScreen";

import { useExperiencesQuery } from "~/services/api/queries/experiences";
import { useSortExperiences } from "~/application/client/experiences/sortExperiences";

type LoaderData = {
  experiences: Experience[];
};

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export let loader: LoaderFunction = async (): Promise<LoaderData> => ({
  experiences: await useExperiencesQuery().run(),
});

const About = () => {
  const { sortExperiences } = useSortExperiences();
  const { experiences } = useLoaderData<LoaderData>();
  const sortedExperiences = sortExperiences(experiences);

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
      <AboutScreen experiences={sortedExperiences} />
      <Footer />
    </>
  );
};

export default About;

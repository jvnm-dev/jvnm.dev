import { MetaFunction } from "@remix-run/node";

import { Header } from "~/ui/components/common/Header";
import { Footer } from "~/ui/components/common/Footer";
import { SprintEstimateScreen } from "~/ui/screens/SprintEstimateScreen";

export let meta: MetaFunction = () => ({
  title: "Collaborative and real-time sprint task estimation",
  description:
    "Estimate your sprint tasks easily and in real-time with your team.",
});

const SprintEstimate = () => {
  return (
    <>
      <Header />
      <SprintEstimateScreen />
      <Footer />
    </>
  );
};

export default SprintEstimate;

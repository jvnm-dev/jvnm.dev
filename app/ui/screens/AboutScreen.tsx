import { Experience } from "~/domain/experience";

import { Jumbotron } from "~/ui/components/about/Jumbotron";
import { Container } from "~/ui/components/common/Container";
import { Typography } from "~/ui/components/common/Typography";
import { ExperiencesList } from "~/ui/components/about/ExperiencesList";

interface IOwnProps {
  experiences: Experience[];
}

export const AboutScreen = ({ experiences }: IOwnProps) => {
  return (
    <Container>
      <Jumbotron />
      <div>
        <Typography
          variant="title"
          level={2}
          className="mb-8 text-6xl dark:text-slate-100"
        >
          Career
        </Typography>
        <ExperiencesList experiences={experiences} />
      </div>
    </Container>
  );
};

import { Experience } from "~/domain/experience";
import { Development } from "~/domain/development";

import { Jumbotron } from "~/application/ui/components/about/Jumbotron";
import { Container } from "~/application/ui/components/common/Container";
import { Typography } from "~/application/ui/components/common/Typography";
import { ProjectsList } from "~/application/ui/components/about/ProjectsList";
import { ExperiencesList } from "~/application/ui/components/about/ExperiencesList";
import { useVisitor } from "~/application/cases/visitors/useVisitors";

interface IOwnProps {
  experiences: Experience[];
  developments: Development[];
}

export const AboutScreen = ({ experiences, developments }: IOwnProps) => {
  useVisitor();

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

      <div>
        <Typography
          variant="title"
          level={2}
          className="mt-16 mb-8 text-6xl dark:text-slate-100"
        >
          Projects
        </Typography>
        <ProjectsList developments={developments} />
      </div>
    </Container>
  );
};

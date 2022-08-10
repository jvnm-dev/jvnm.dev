import { Link, useLoaderData } from "@remix-run/react";
import {
  ActionArgs,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";

import { auth } from "~/services/api";
import { destroySession, getSession } from "~/services/cookies/auth";
import { useSessionChecker } from "~/services/hooks/session.server";

import Sider from "~/application/ui/components/admin/Sider";
import { useExperiencesQuery } from "~/services/queries/experiences";
import { Experience } from "~/domain/experience";
import { Typography } from "~/application/ui/components/common/Typography";
import { formatDate } from "~/lib/date";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export async function action({ request }: ActionArgs) {
  await auth.signOut();
  await destroySession(await getSession(request.headers.get("Cookie")));

  return redirect("/");
}

export async function loader({ request }: LoaderArgs) {
  const session = await useSessionChecker(request);

  if (session.status === 302) {
    return session;
  }

  const experiences = await useExperiencesQuery().run();

  return { session, experiences };
}

const AddExperience = () => {
  const { experiences } = useLoaderData();

  return (
    <div className="flex">
      <Sider />

      <div className="flex-1 p-8">
        <div className="mb-6 flex justify-between">
          <Typography variant="title" level={1} className="font-bold">
            Add a new experience
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;

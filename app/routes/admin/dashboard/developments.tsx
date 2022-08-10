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
  return useSessionChecker(request);
}

const AdminDevelopments = () => {
  return <Sider />;
};

export default AdminDevelopments;

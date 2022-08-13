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
import { useLogoutQuery } from "~/services/queries/auth";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const { run: logout } = useLogoutQuery(request);

  switch (formData.get("action")) {
    case "logout":
      return await logout();
  }
}

export async function loader({ request }: LoaderArgs) {
  return useSessionChecker(request);
}

const AdminDevelopments = () => {
  return <Sider />;
};

export default AdminDevelopments;

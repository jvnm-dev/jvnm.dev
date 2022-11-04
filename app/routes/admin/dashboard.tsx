import { Outlet } from "@remix-run/react";
import {
  ActionArgs,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";

import { useLogoutQuery } from "~/services/api/queries/auth";
import { useSessionChecker } from "~/application/server/auth/session.server";

import Sider from "~/ui/components/admin/Sider";

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
  const session = await useSessionChecker(request);

  if (session.status === 302) {
    return session;
  }

  const lastURLPathname = request.url.split("/").pop() ?? "";

  if (["", "dashboard"].includes(lastURLPathname)) {
    return redirect("/admin/dashboard/experiences");
  }

  return { session };
}

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sider />

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

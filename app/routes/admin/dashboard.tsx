import { Outlet } from "@remix-run/react";
import {
  ActionArgs,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";

import { useAuth } from "~/services/authAdapter";

import Sider from "~/ui/components/admin/Sider";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const { destroySession } = useAuth();

  switch (formData.get("action")) {
    case "logout":
      return await destroySession(request);
  }
}

export async function loader({ request }: LoaderArgs) {
  const { checkSession } = useAuth();

  const session = await checkSession(request);

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

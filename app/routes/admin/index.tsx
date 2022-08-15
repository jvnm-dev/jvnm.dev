import { Form } from "@remix-run/react";
import {
  ActionArgs,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";

import {
  useSessionCommitter,
  verifySession,
} from "~/services/hooks/session.server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "~/firebase";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export async function loader({ request }: LoaderArgs) {
  const loggedIn = await verifySession(request);

  if (loggedIn) {
    return redirect("/admin/dashboard");
  }

  return null;
}

export async function action({ request }: ActionArgs) {
  const data = await request.formData();
  const auth = await getAuth();
  const email = data.get("email")?.toString();
  const password = data.get("password")?.toString();

  if (email && password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return useSessionCommitter(request, user);
  }

  return null;
}

const Admin = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
          Hello, boss.
        </h1>

        <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
          Please sign in to confirm your identity.
        </p>

        <div className="bg-white p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
          <Form method="post">
            <input
              type="text"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="mt-4 block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg text-center cursor-pointer"
            >
              Sign in
            </button>
          </Form>

          <p className="text-sm text-center text-gray-500">
            You are not the boss? Then what are you doing here? 🤔
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

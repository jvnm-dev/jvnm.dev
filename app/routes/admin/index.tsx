import {
  ActionArgs,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "~/services/api";
import { getSession } from "~/services/cookies/auth";
import { useSubmit } from "@remix-run/react";
import {
  useSessionCommitter,
  verifySession,
} from "~/services/hooks/session.server";

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
  const user = JSON.parse(data.get("user") as string);

  return useSessionCommitter(request, user);
}

const Admin = () => {
  const submit = useSubmit();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    if (user) {
      const formData = new FormData();
      formData.set("user", JSON.stringify(user));
      submit(formData, { method: "post" });
    }
  };

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
          <span
            onClick={signInWithGoogle}
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg text-center cursor-pointer"
          >
            Sign in with Google
          </span>

          <p className="text-sm text-center text-gray-500">
            You are not the boss? Then what are you doing here? 🤔
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

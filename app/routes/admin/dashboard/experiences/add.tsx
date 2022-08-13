import { FaPaperPlane } from "react-icons/fa";
import { Form } from "@remix-run/react";
import { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";

import { useLogoutQuery } from "~/services/queries/auth";
import { useSessionChecker } from "~/services/hooks/session.server";
import {
  useAddExperienceQuery,
  useExperiencesQuery,
} from "~/services/queries/experiences";

import Sider from "~/application/ui/components/admin/Sider";
import { Typography } from "~/application/ui/components/common/Typography";

import { toBase64 } from "~/lib/file";
import { ChangeEvent, useState } from "react";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const { run: logout } = useLogoutQuery(request);
  const { run: addExperience } = useAddExperienceQuery();

  switch (formData.get("action")) {
    case "addExperience":
      return await addExperience(formData);
    case "logout":
      return await logout();
  }
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
  const [file, setFile] = useState<string>("");

  const onFileUploaded = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileCandidate = e.target.files?.[0];

    if (fileCandidate) {
      const b64 = await toBase64(fileCandidate);
      setFile(b64 ?? "");
    }
  };

  return (
    <div className="flex">
      <Sider />

      <div className="flex-1 p-8">
        <div className="mb-6 flex justify-between">
          <Typography variant="title" level={1} className="font-bold">
            Add a new experience
          </Typography>
        </div>

        <Form method="post" encType="multipart/form-data" className="w-1/2">
          <input type="hidden" name="action" value="addExperience" />
          <div className="mb-6">
            <label
              htmlFor="place"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Google"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Software Engineer"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="url"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://google.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="dateFrom"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Start date
            </label>
            <input
              type="text"
              id="dateFrom"
              name="dateFrom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sep 2022"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="dateTo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              End date
            </label>
            <input
              type="text"
              id="dateTo"
              name="dateTo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sep 2023"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sep 2023"
              required
              onChange={onFileUploaded}
            />
            <input type="hidden" id="image" name="image" value={file} />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="isExtiaConsulting"
                name="isExtiaConsulting"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="isExtiaConsulting"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Extia consulting
            </label>
          </div>

          <button className="hoverableButton">
            <div>
              <span className="cursor-pointer button p-2">
                <FaPaperPlane className="mr-2" /> Submit
              </span>
            </div>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddExperience;

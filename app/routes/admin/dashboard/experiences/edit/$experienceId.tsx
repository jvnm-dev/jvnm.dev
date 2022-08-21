import { ChangeEvent, useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import {
  ActionArgs,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";

import {
  useDeleteExperienceQuery,
  useExperienceQuery,
} from "~/services/queries/experiences";

import { Typography } from "~/application/ui/components/common/Typography";

import { toBase64 } from "~/lib/file";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night.",
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const experienceId = formData.get("id")?.toString();

  const { run: deleteExperience } = useDeleteExperienceQuery();

  switch (formData.get("action")) {
    case "deleteExperience":
      if (!experienceId) return;
      return await deleteExperience(experienceId);
  }
}

export async function loader({ params }: LoaderArgs) {
  const { experienceId } = params;

  const experience = experienceId
    ? await useExperienceQuery().run(experienceId)
    : undefined;

  if (!experience) {
    return redirect("/admin/dashboard/experiences");
  }

  return { experience };
}

const EditExperience = () => {
  const submit = useSubmit();
  const [file, setFile] = useState<string>("");
  const { experience } = useLoaderData();

  const deleteExperience = () => {
    if (experience) {
      const formData = new FormData();
      formData.append("action", "deleteExperience");
      formData.append("id", experience?.id);

      submit(formData, { method: "post" });
    }
  };

  const onFileUploaded = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileCandidate = e.target.files?.[0];

    if (fileCandidate) {
      const b64 = await toBase64(fileCandidate);
      setFile(b64 ?? "");
    }
  };

  return (
    <div className="w-1/2">
      <div className="mb-6 flex justify-between">
        <Typography variant="title" level={1} className="font-bold">
          Edit experience{" "}
        </Typography>

        <button className="hoverableButton" onClick={deleteExperience}>
          <div>
            <span className="cursor-pointer button danger p-2">
              <FaTrash className="mr-2" /> Delete
            </span>
          </div>
        </button>
      </div>

      <Form method="post" encType="multipart/form-data">
        <input type="hidden" name="action" value="editExperience" />
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
            defaultValue={experience?.place}
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
            defaultValue={experience?.role}
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
            defaultValue={experience?.url}
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
            defaultValue={experience?.dateFrom}
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
            defaultValue={experience?.dateTo}
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
          <img
            src={experience?.image}
            alt="Experience image"
            width={64}
            height={64}
          />
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
              defaultChecked={experience?.isExtiaConsulting}
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
  );
};

export default EditExperience;

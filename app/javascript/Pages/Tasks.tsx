import React from "react";
import Linkify from "react-linkify";
import Layout from "./Layout";
import { Head, router } from "@inertiajs/react";
import NewTask from "../Components/NewTask";

type TaskProp = {
  id: number;
  description: string;
  completed: boolean;
};
declare interface TasksPageProps {
  tasks: Array<TaskProp>;
}

export default function Tasks({ tasks }: TasksPageProps) {
  const decorateLink = (decoratedHref, decoratedText, key) => (
    <a target="blank" href={decoratedHref} key={key} className="text-blue-500">
      {decoratedText}
    </a>
  );
  const tasksList = tasks.map((task) => (
    <div
      key={task.id}
      className="p-2 w-96 rounded-lg
      bg-gray-400 bg-opacity-20
      dark:bg-gray-800 dark:bg-opacity-20
      flex"
    >
      <input
        type={"checkbox"}
        onChange={() =>
          router.put(`/tasks/${task.id}`, {
            completed_at: new Date().toISOString(),
          })
        }
        className="mr-2 mt-1"
      ></input>
      <div className="">
        <Linkify componentDecorator={decorateLink}>{task.description}</Linkify>
      </div>
    </div>
  ));

  return (
    <Layout>
      <Head title="QuickDry - Tasks" />

      <div className="p-2">
        <div className="grid gap-2">{tasksList}</div>

        <div className="pt-4 pb-4">
          <NewTask></NewTask>
        </div>
      </div>
    </Layout>
  );
}

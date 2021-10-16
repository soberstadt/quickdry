import React from "react";
import Layout from "./Layout";
import { Head } from "@inertiajs/inertia-react";
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
  const tasksList = tasks.map((task) => (
    <div
      key={task.id}
      className="p-2 w-96 rounded-lg
      bg-gray-400 bg-opacity-20
      dark:bg-gray-800 dark:bg-opacity-20"
    >
      <div>{task.description}</div>
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

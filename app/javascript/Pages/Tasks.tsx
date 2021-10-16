import React, { useState } from "react";
import Layout from "./Layout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useHotkeys } from "react-hotkeys-hook";

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
      className="block p-2 w-96 rounded-lg
      bg-gray-400 bg-opacity-20
      hover:bg-gray-600 hover:bg-opacity-70 hover:text-gray-50
      dark:bg-gray-800 dark:bg-opacity-20
      dark:hover:bg-gray-300 dark:hover:bg-opacity-90 dark:hover:text-gray-700"
    >
      <div>{task.description}</div>
    </div>
  ));

  const [newTask, setNewTask] = useState("");

  function newTaskInputChange(e) {
    setNewTask(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Inertia.post(
      "/tasks",
      { description: newTask },
      { onSuccess: () => setNewTask("") }
    );
  };

  return (
    <Layout>
      <Head title="QuickDry - Tasks" />

      <div className="pt-2">
        <div className="grid gap-2">{tasksList}</div>

        <div className="pt-4 pb-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="new_task">New Task:</label>
            <input
              id="new_task"
              value={newTask}
              onChange={newTaskInputChange}
              className="text-black text-xl w-64
                p-2 outline-none
                bg-gray-400 bg-opacity-10
                dark:bg-gray-800 dark:bg-opacity-10 dark:text-gray-300"
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

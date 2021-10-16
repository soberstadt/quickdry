import React from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function NewTask() {
  const { data, setData, post, processing, reset } = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    post("/tasks", { onSuccess: () => reset("description") });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New Task"
        aria-label="New Task"
        value={data.description}
        onChange={(e) => setData("description", e.target.value)}
        className="text-black text-xl w-80
          p-2 mr-2 outline-none
          bg-gray-400 bg-opacity-10
          dark:bg-gray-800 dark:bg-opacity-10 dark:text-gray-300"
      />
      <button type="submit" disabled={processing}>
        Save
      </button>
    </form>
  );
}

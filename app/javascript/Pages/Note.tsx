import React from "react";
import Layout from "./Layout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import NotesList from "../Components/NotesList";

type NoteProp = {
  id: number;
  date: Date;
  date_string: string;
  body: string;
};
export declare interface NotePageProps {
  note: NoteProp;
  notes: Array<NoteProp>;
}

export default function Note({ note, notes }: NotePageProps) {
  const handleChange = (event) => {
    const data = { body: event.target.value };
    const options = { preserveState: true };
    if (note.id !== null) {
      Inertia.put(`/notes/${note.id}`, data, options);
    } else {
      Inertia.post(`/notes`, data, options);
    }
  };

  return (
    <Layout>
      <Head title={`QuickDry - ${note.date_string}`} />

      <aside className="flex-shrink-0 w-48 p-2">
        <NotesList note={note} notes={notes}></NotesList>
      </aside>

      <article className="flex flex-col flex-grow">
        <h1 className="flex-shrink-0 text-2xl p-2 font-mono">
          # {note.date_string}
        </h1>

        <textarea
          className="flex-grow text-lg font-mono p-2 outline-none
        bg-gray-400 bg-opacity-10
        dark:bg-gray-800 dark:bg-opacity-10"
          defaultValue={note.body}
          onChange={handleChange}
          autoFocus
        ></textarea>
      </article>
    </Layout>
  );
}

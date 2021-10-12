import React, { useEffect } from "react";
import Layout from "./Layout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useHotkeys } from "react-hotkeys-hook";

type NoteProp = {
  id: number;
  date: Date;
  date_string: string;
  body: string;
};
declare interface NotePageProps {
  note: NoteProp;
  notes: Array<NoteProp>;
}

export default function Note({ note, notes }: NotePageProps) {
  const MINUTE_MS = 60000;

  const reloadNotes = () => {
    Inertia.reload({ only: ["notes"] });
  };

  useEffect(() => {
    const interval = setInterval(reloadNotes, MINUTE_MS * 5);

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);

  useHotkeys("cmd+k", () => Inertia.visit("/search"), {
    enableOnTags: ["TEXTAREA"],
  });

  const handleChange = (event) => {
    const data = { body: event.target.value };
    const options = { preserveState: true };
    if (note.id !== null) {
      Inertia.put(`/notes/${note.id}`, data, options);
    } else {
      Inertia.post(`/notes`, data, options);
    }
  };

  const notesLink = (note) => {
    if (note.id == null) {
      return "/notes/today";
    } else {
      return `/notes/${note.id}`;
    }
  };

  const notesList = notes.map((iNote) => (
    <Link
      href={notesLink(iNote)}
      className="block p-2 rounded-lg
      bg-gray-400 bg-opacity-20
      hover:bg-gray-600 hover:bg-opacity-70 hover:text-gray-50
      dark:bg-gray-800 dark:bg-opacity-20
      dark:hover:bg-gray-300 dark:hover:bg-opacity-90 dark:hover:text-gray-700"
    >
      {note.id == iNote.id ? "> " : ""}
      {iNote.date_string}
    </Link>
  ));

  return (
    <Layout>
      <Head title={`QuickDry - ${note.date_string}`} />

      <aside className="flex-shrink-0 w-48 p-2">
        <div className="grid gap-2">{notesList}</div>
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

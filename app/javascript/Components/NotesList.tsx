import React, { useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import { NotePageProps } from "../Pages/Note";

export default function NotesList({ note, notes }: NotePageProps) {
  const MINUTE_MS = 60000;

  const reloadNotes = () => {
    router.reload({ only: ["notes"] });
  };

  useEffect(() => {
    const interval = setInterval(reloadNotes, MINUTE_MS * 5);

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);

  const notesLink = (note) => {
    if (note.id == null) {
      return "/notes/today";
    } else {
      return `/notes/${note.id}`;
    }
  };

  const notesList = notes.map((iNote) => (
    <Link
      key={iNote.id}
      href={notesLink(iNote)}
      className="block p-2 rounded-lg w-44
      bg-gray-400 bg-opacity-20
      hover:bg-gray-600 hover:bg-opacity-70 hover:text-gray-50
      dark:bg-gray-800 dark:bg-opacity-20
      dark:hover:bg-gray-300 dark:hover:bg-opacity-90 dark:hover:text-gray-700"
    >
      <div>
        {note.id == iNote.id ? "> " : ""}
        {iNote.date_string}
      </div>
      <div
        className="text-gray-400 w-full
                   whitespace-nowrap overflow-ellipsis overflow-hidden"
      >
        {iNote.first_line}
      </div>
    </Link>
  ));

  return <div className="grid gap-2">{notesList}</div>;
}

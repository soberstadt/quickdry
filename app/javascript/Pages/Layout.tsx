import React, { useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Layout({ children, notes, selectedNote }) {
  const notesLink = (note) => {
    if (note.id == null) {
      return "/notes/new";
    } else {
      return `/notes/${note.id}/edit`;
    }
  };
  const notesList = notes.map((note) => (
    <Link
      href={notesLink(note)}
      className="block p-2 rounded-lg
      bg-gray-400 bg-opacity-20
      hover:bg-gray-600 hover:bg-opacity-70 hover:text-gray-50
      dark:bg-gray-800 dark:bg-opacity-20
      dark:hover:bg-gray-300 dark:hover:bg-opacity-90 dark:hover:text-gray-700"
    >
      {selectedNote.id == note.id ? "> " : ""}
      {note.date_string}
    </Link>
  ));
  return (
    <main className="h-full flex flex-col bg-gray-20 text-gray-700 dark:bg-gray-700 dark:text-gray-50">
      <header className="border-b-2 border-solid border-gray-200 dark:border-gray-600">
        <div className="w-full max-w-screen-lg mx-auto p-2">
          <span className="font-bold font-mono">QuickDry</span>
        </div>
      </header>
      <div className="flex flex-grow w-full max-w-screen-lg mx-auto">
        <aside className="flex-shrink-0 w-48 p-2">
          <div className="grid gap-2">{notesList}</div>
        </aside>
        <article className="flex flex-col flex-grow">{children}</article>
      </div>
    </main>
  );
}

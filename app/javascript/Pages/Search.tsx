import React, { useState } from "react";
import Layout from "./Layout";
import { Head, Link, router } from "@inertiajs/react";
import { useHotkeys } from "react-hotkeys-hook";

type NoteProp = {
  id: number;
  date_string: string;
  body_match: {
    before: string;
    match: string;
    after: string;
  };
};
declare interface SearchPageProps {
  results: Array<NoteProp>;
  query: string;
}

export default function Search({ results, query }: SearchPageProps) {
  const notesLink = (note) => `/notes/${note.id}`;

  useHotkeys("esc", () => router.visit("/notes/today"), {
    enableOnFormTags: ["INPUT"],
  });

  const resultsList = results.map((iNote) => (
    <Link
      href={notesLink(iNote)}
      className="block p-2 w-96 rounded-lg
      bg-gray-400 bg-opacity-20
      hover:bg-gray-600 hover:bg-opacity-70 hover:text-gray-50
      dark:bg-gray-800 dark:bg-opacity-20
      dark:hover:bg-gray-300 dark:hover:bg-opacity-90 dark:hover:text-gray-700"
    >
      <div>{iNote.date_string}</div>
      <div>
        <span>{iNote.body_match.before}</span>
        <span className="bg-yellow-400 bg-opacity-50">
          {iNote.body_match.match}
        </span>
        <span>{iNote.body_match.after}</span>
      </div>
    </Link>
  ));

  const handleChange = (event) => {
    let data = { query: event.target.value };

    router.get(`/search`, data, { preserveState: true });
  };

  return (
    <Layout>
      <Head title="QuickDry - Searching" />

      <div>
        <div className="pt-4 pb-4">
          <input
            autoFocus
            className="text-black text-xl w-64
            p-2 outline-none
            bg-gray-400 bg-opacity-10
            dark:text-gray-300 dark:bg-gray-800 dark:bg-opacity-10"
            onChange={handleChange}
            defaultValue={query}
          ></input>
        </div>

        <div className="">
          <div className="grid gap-2">{resultsList}</div>
        </div>
      </div>
    </Layout>
  );
}

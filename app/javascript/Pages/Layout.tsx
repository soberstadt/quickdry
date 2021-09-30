import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Layout({ children, notes }) {
  const notesLink = (note) => {
    if (note.id == null) {
      return "/notes/new"
    } else {
      return `/notes/${note.id}/edit`
    }
  }
  const notesList = notes.map((note) =>
    <Link href={notesLink(note)}
          className="bg-gray-800 bg-opacity-30 block p-2 ">
      {note.date_string}
    </Link>
  )
  return (
    <main className="h-full flex flex-col bg-gray-700 text-gray-50">
      <header className="h-12 p-3 border-b-2 border-solid border-gray-600">
        <span>QuickDry</span>
      </header>
      <div className="flex flex-grow">
        <aside className="flex-shrink-0 w-48 p-2 pt-0">
          <div className="grid divide-y divide-gray-500">
            {notesList}
          </div>
        </aside>
        <article className="flex flex-col flex-grow">
          {children}
        </article>
      </div>
    </main>
  )
}
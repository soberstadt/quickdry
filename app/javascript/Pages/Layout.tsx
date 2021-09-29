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
    <li>
      <Link href={notesLink(note)} className="bg-gray-800 p-2">{note.date_string}</Link>
    </li>
  )
  return (
    <main className="h-full flex flex-col bg-gray-700 text-gray-50">
      <header className="h-12 p-3">
        <span>QuickDry</span>
      </header>
      <div className="flex flex-grow">
        <aside className="flex-shrink-0 w-48">
          <ul>{notesList}</ul>
        </aside>
        <article className="flex flex-col flex-grow">
          {children}
        </article>
      </div>
    </main>
  )
}
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
      <Link href={notesLink(note)}>{note.date_string}</Link>
    </li>
  )
  return (
    <main className="flex flex-column">
      <header class="flex items-center justify-between flex-wrap bg-teal p-6">
        <span>QuickDry</span>
      </header>
      <div className="flex flex-grow1">
        <aside className="flex-shrink0">
          <ul>{notesList}</ul>
        </aside>
        <article className="flex flex-column flex-grow1">
          {children}
        </article>
      </div>
    </main>
  )
}
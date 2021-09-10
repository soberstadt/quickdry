import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Layout({ children, notes }) {
  const listItems = notes.map((note) =>
    <li>
      <Link href={`/notes/${note.id}/edit`}>{note.date}</Link>
    </li>
  )
  return (
    <main className="flex flex-column">
      <header>
        <span>QuickDry</span> -
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <div className="flex flex-grow1">
        <aside className="flex-shrink0">
          <ul>{listItems}</ul>
        </aside>
        <article className="flex flex-column flex-grow1">
          {children}
        </article>
      </div>
    </main>
  )
}
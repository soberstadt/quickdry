import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Layout({ children, notes }) {
  const listItems = notes.map((note) =>
    <li>
      <Link href={`/notes/${note.id}/edit`}>{note.date}</Link>
    </li>
  )
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <aside>
        <ul>{listItems}</ul>
      </aside>
      <article>{children}</article>
    </main>
  )
}
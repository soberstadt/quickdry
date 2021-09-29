import React, { useEffect } from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

declare interface NotePageProps {
  note: { id, date, date_string, body };
  notes: Array<Object>
}

export default function Note({ note, notes }: NotePageProps) {
  const MINUTE_MS = 60000;

  const reloadNotes = () => {
    Inertia.reload({ only: ['notes'] })
  }

  useEffect(() => {
    const interval = setInterval(reloadNotes, MINUTE_MS * 5)

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval)
  }, [])

  const handleChange = (event) => {
    let data = { body: event.target.value, preserveState: true }
    if (note.id !== null) {
      Inertia.put(`/notes/${note.id}`, data)
    } else {
      Inertia.post(`/notes`, data)
    }
  }

  return (
    <Layout notes={notes}>
      <Head title={`QuickDry - ${note.date_string}`} />
      <h1 className="flex-shrink-0">{note.date_string}</h1>
      <textarea
        className="flex-grow text-lg font-mono text-black"
        defaultValue={note.body}
        onChange={handleChange}>
      </textarea>
    </Layout>
  )
}
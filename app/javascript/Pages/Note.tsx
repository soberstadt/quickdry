import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function Note({ note, notes }) {
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
      <Head title={`QuickDry - ${note.date}`} />
      <h1 className="flex-shrink0">{note.date}</h1>
      <textarea className="flex-grow1" defaultValue={note.body} onChange={handleChange}></textarea>
    </Layout>
  )
}
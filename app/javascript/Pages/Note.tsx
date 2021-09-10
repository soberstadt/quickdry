import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'

export default function Note({ note, notes }) {
  return (
    <Layout notes={notes}>
      <Head title={`QuickDry - ${note.date}`} />
      <h1 className="flex-shrink0">{note.date}</h1>
      <textarea className="flex-grow1" defaultValue={note.body}></textarea>
    </Layout>
  )
}
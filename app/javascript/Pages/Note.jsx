import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'

export default function Note({ note, notes }) {
  return (
    <Layout notes={notes}>
      <Head title="Note" />
      <h1>Note</h1>
      <textarea>{note.text}</textarea>
    </Layout>
  )
}
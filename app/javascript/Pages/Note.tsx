import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

type NoteComponentProps = {
  // using `interface` is also ok
  note: { id, date, date_string, body };
  notes: Array<Object>
};

export default class Note extends React.Component<NoteComponentProps> {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let data = { body: event.target.value, preserveState: true }
    if (this.props.note.id !== null) {
      Inertia.put(`/notes/${this.props.note.id}`, data)
    } else {
      Inertia.post(`/notes`, data)
    }
  }

  render() {
    return (
      <Layout notes={this.props.notes}>
        <Head title={`QuickDry - ${this.props.note.date_string}`} />
        <h1 className="flex-shrink0">{this.props.note.date_string}</h1>
        <textarea className="flex-grow1" defaultValue={this.props.note.body} onChange={this.handleChange}></textarea>
      </Layout>
    )
  }
}
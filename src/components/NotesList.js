import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = (props) => {
  const handleAddNote = props.handleAddNote;
  return (
    <div className="notes-list">

      {props.data && props.data.map(note => 
        <Note data={note} key={note.id} deleteNote = {props.deleteNote} />)}
      
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList
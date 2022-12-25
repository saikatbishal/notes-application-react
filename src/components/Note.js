import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
const Note = (props) => {
  return (
    <div className="note">
      <span>{ props.data.text}</span>
      <div className="note-footer">
        <small>{ props.data.date}</small>
        <MdDeleteForever className ='delete-icon' size='1.3em' onClick={()=>props.deleteNote(props.data.id)}/>
      </div>
    </div>
  )
}

export default Note;
import React from 'react'
// import {MdDeleteForever} from 'react-icons/md'
const Note = (props) => {
  return (
    <div className="note">
      <span>{ props.data.text}</span>
      <div className="note-footer">
        <small>{ props.data.date}</small>
        <button className ='delete-icon' size='1.3em' onClick={()=>props.deleteNote(props.data.id)}><span aria-label='delete button'>🗑️</span></button>
      </div>
    </div>
  )
}

export default Note;
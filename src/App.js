import './App.css';
import { useState } from 'react';
import NotesList from './components/NotesList';
import { data } from './data.js'
import {nanoid} from  'nanoid';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState(data);
  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id))
  }
  function addNote(text) {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const searchNotes = (notes) => {
    
  }
  return (
    <div className="container">
      <Search searchNotes = {searchNotes} />
      { <NotesList data = {notes} handleAddNote = {addNote} deleteNote = {deleteNote}></NotesList>}
    </div>
  );
}

export default App;

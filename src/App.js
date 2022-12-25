import './App.css';
import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
// import { data } from './data.js'
import {nanoid} from  'nanoid';
import Search from './components/Search';
import Header from './components/Header';
import { MdBloodtype } from 'react-icons/md';
function App() {
  const [notes, setNotes] = useState(() => {
    const data = localStorage.getItem('react-notes-app-data');
    return data ? JSON.parse(data) : [];
  });
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    console.log(localStorage);
    if (savedNotes.length!== null) {
      setNotes(savedNotes);
    }
    
  }, [])
  
  // ADDING A NOTE 
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

// DELETING A NOTE FOREVER
  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id))
  }

// TOGGGLING BETWEEN LIGHT  AND DARK MODE
  const changeMode = () => {
    document.querySelector('body').classList.toggle('dark-mode');
    if(MdBloodtype.classList.contains('dark-mode'))
      localStorage.setItem('themeSwitch', 'dark');
    else
      localStorage.setItem('themeSwitch', 'light');

  }

  return (
    <div className="container">
      <Header changeMode={changeMode}/>
      <Search searchNotes = {setSearchText} />
      {<NotesList data={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        deleteNote={deleteNote}>
      </NotesList>}
    </div>
  );
}

export default App;

import React,{useState} from 'react'

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const [character, setCharacter] = useState(200);
  const handleChange = (event) => {
    // event.preventDefault();
    const characterLimit = 200
    setCharacter(200 - event.target.value.length);
    if (character < 0)
    {
      const textArea = document.querySelector('.textarea');
      textArea.style.color = 'red';
    }
    if (characterLimit - event.target.value.length >= 0)
    {
      const textArea = document.querySelector('.textarea');
      textArea.style.color = 'black';
      setNoteText(event.target.value);
    }

  }
  const handleSaveClick = () => {
    if(noteText.trim().length > 0) 
    {
      handleAddNote(noteText);
      setNoteText('');
      setCharacter(200);
    }
    
  }
  return (
    <div className="note new">
      <textarea
        className = "textarea"
        rows='8'
        cols='10'
        value = {noteText}
        placeholder='Start  writing . . .'
      onChange={handleChange}/>
      <div className="note-footer ">
        <small>{character} remaining</small>
        <button className="save" onClick={
          handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
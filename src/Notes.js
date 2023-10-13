
import React, { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';
import './note.css';


const Notes = () => {
  const [activeNote, setNote] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    addNote(activeNote);
    setNote('');
  };

  return (
    <div className="content">
      <h1>Add Notes </h1>
      < textarea
        placeholder="Title"
        value={activeNote}
        onChange={handleNoteChange}
        autoFocus
      />
      <textarea 
        placeholder="Take a note..."
        value={activeNote.body} 
        onChange={handleNoteChange}
      />
    
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Notes;


import React, { useState, createContext } from 'react';
import './value.css'

export const NotesContext = createContext();
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes([...notes, note]);
  };
  return (
    <div className="note-content">
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
    </div>
  );
}
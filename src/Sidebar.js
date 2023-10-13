
import React, { useContext } from 'react';
import { NotesContext } from './NotesContext';
import './Sidebar.css';


const Sidebar = () => {
  const { notes } = useContext(NotesContext);
  

  return (
    <div className="sidebar">
        <div className='aa'>
        <h2>Notes APP</h2>
      <p>Notes</p>
        </div>
    
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

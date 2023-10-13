
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';

import Notes from './Notes';
import { NotesProvider } from './NotesContext';

function App() {
  return (
    <Router>
      <NotesProvider>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Notes} />
          </Switch>
        </div>
      </NotesProvider>
      
    </Router>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/body/Body';

const App: React.FC = () => (
  <div>
    <Router>
      <Navbar></Navbar>

      <Body></Body>
    </Router>
  </div>
);

export default App;

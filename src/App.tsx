import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/body/Body';
import store from './library/store';
import { Provider, useSelector } from 'react-redux';
import { Progress } from './components/progress/Progress';
import { SocketService } from './services/socket.service';
import { AuthState } from './library/reducers/auth';

const App: React.FC = () => {
  return (
    <div className='react-root'>
      <Provider store={store}>
        <Router>
          <div className='root-container'>
            <div className='root-navbar'>
              <Navbar></Navbar>
            </div>
            <div className='root-body'>
              <Body></Body>
            </div>
            <div className='root-progress'>
              <Progress />
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default App;

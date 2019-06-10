import React from 'react';
import {BrowserRouter as Router , Link , NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.scss';
import LogIn from './components/logIn/LogIn'
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
    
    
    <Router>
     <Route path="/" exact render = {() => <LogIn></LogIn>}/>
      <Route path="/login" render = {() => <LogIn></LogIn>}/>
      <Route path="/main" render = {() => <Main></Main>}/>
      </Router>

      
    </div>
  );
}

export default App;

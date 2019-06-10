import React from 'react';
import {BrowserRouter as Router , Link , NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.scss';
import LogIn from './components/logIn/LogIn'
import Main from './components/main/Main';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
    
    
    <Router>
     <Route path="/" exact render = {() => <LogIn></LogIn>}/>
      <Route path="/login" render = {() => <LogIn></LogIn>}/>
      <PrivateRoute path="/main" component = {Main}/>
      </Router>


    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Landing from './components/Landing/landing'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component={Landing}/>
      <Route exact path = '/home' component= {Home}/>
    </div>
  );
}

export default App;

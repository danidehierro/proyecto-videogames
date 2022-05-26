import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Landing from './components/Landing/landing'
import Home from './components/Home/Home'
import Detail from './components/Detail/detail';
import VideogameCreate from './components/VgameCreate/vgameCreate';
function App() {
  return (
    <div className="App">
      <Route exact path = '/' component={Landing}/>
      <Route exact path = '/home' component= {Home}/>
      <Route path = '/detail/:id' component={Detail}/>
      <Route exact path="/create" component={VideogameCreate} />
    </div>
  );
}

export default App;

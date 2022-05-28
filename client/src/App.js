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
      <Route  path = '/home' component= {Home}/>
      <Route  path="/create" component={VideogameCreate} />
      <Route  path = '/detail/:id' component={Detail}/>
    </div>
  );
}

export default App;

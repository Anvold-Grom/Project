import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
return (
  <BrowserRouter>
  <div class='app-wrapper'>
    <Header />
    <Navbar />
    <div class='app-wrapper-content'>
      <Route path='/news' render={News} />
      <Route path='/settings' render={Settings} />
      <Route path='/music' render={Music} />

      <Route path='/dialogs' 
          render={ () => <Dialogs state={props.state.dialogsPage} /> } />
      <Route path='/profile' 
          render={ () => <Profile state={props.state.profilePage} /> } />
      <Route path='/friends'
          render={ () => <Sidebar state={props.state.sidebar} /> } />
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
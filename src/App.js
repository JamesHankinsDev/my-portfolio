import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './navigation/Header/Header';
import { Home } from './pages/Home/Home';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Resume } from './pages/Resume/Resume';
import { Contact } from './pages/Contact/Contact';
import { SwitchComponent } from './Switch';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SwitchComponent />
      </div>
    </Router>
  );
};
export default App;

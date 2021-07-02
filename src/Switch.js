import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './navigation/Header/Header';
import { Home } from './pages/Home/Home';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Resume } from './pages/Resume/Resume';
import { Contact } from './pages/Contact/Contact';

export const SwitchComponent = () => {
  const [activePath, setActivePath] = useState('Home');
  const onRender = (path) => {
    setActivePath(path);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
        isActive={activePath === 'Home'}
        onRender={onRender}
      />
      <Route
        exact
        path="/About"
        component={AboutMe}
        isActive={activePath === 'About'}
        onRender={onRender}
      />
      <Route
        exact
        path="/Experience"
        component={() => <h1>Experience Page</h1>}
        isActive={activePath === 'Experience'}
        onRender={onRender}
      />
      <Route
        exact
        path="/Resume"
        component={Resume}
        isActive={activePath === 'Resume'}
        onRender={onRender}
      />
      <Route
        exact
        path="/Contact"
        component={Contact}
        isActive={activePath === 'Contact'}
        onRender={onRender}
      />
    </Switch>
  );
};

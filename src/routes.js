import React from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';

import './styles/animation.styles.css';

export default function Routes() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/game" exact component={Game} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

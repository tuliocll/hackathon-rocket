import React from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './styles/animation.styles.css';

const Home = () => <h1>Home</h1>;
const Welcome = () => <h1>Welcome</h1>;

export default function Routes() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/welcome" exact component={Welcome} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

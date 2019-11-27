import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Routes from './routes';

import GlobalStyles from './styles/global.styles';

import 'react-notifications/lib/notifications.css';

export default function App() {
  return (
    <Router>
      <Routes />

      <GlobalStyles />
      <NotificationContainer />
    </Router>
  );
}

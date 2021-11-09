/* eslint import/no-named-as-default: 0 */
/*
 * App.jsx
 *
 * The App component wraps the components in the theme provider &
 * defines all the routes.
 */

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import NavHeader from './NavHeader';
import HomeTab from './Tabs/HomeTab';
import SchoolTab from './Tabs/SchoolTab';
import ContactTab from './Tabs/ContactTab';
import WorkTab from './Tabs/WorkTab';
import CodeTab from './Tabs/CodeTab';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#004d73',
    },
    background: {
      paper: '#dbe3e8',
    },
  },
  typography: {
    useNextVariants: true,
  },
  breakpoints: {
    values: {
      sm: 350,
      md: 500,
      lg: 750,
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        'line-height': 1.3,
      },
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <NavHeader />
        <Routes>
          <Route exact path="/" element={<HomeTab />} />
          <Route path="/experience" element={<WorkTab />} />
          <Route path="/education" element={<SchoolTab />} />
          <Route path="/code" element={<CodeTab />} />
          <Route path="/contact" element={<ContactTab />} />
        </Routes>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;

import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

const Routes = (props) => (
  <HashRouter>
    <Route path="/todos" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/todos" />
  </HashRouter>
);

export default Routes;

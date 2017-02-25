import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)
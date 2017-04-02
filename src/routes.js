import React from 'react';
import {Route, IndexRoute} from 'react-router';

import About from './containers/about';
import Home from './containers/home';

export default (
  <div>
    <h1>react-redux-boiler</h1>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
)
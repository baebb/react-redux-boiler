import {connect} from 'react-redux';
import React from 'react';
import {Fragment} from 'redux-little-router';

import About from './containers/about';
import Count from './containers/count';
import Home from './containers/home';

class App extends React.Component {
  render() {
    return (
      <Fragment forRoute='/'>
        <div className="App">
          <h1 className="text-center">react-redux-boiler</h1>
          <Fragment forRoute='/'><Home /></Fragment>
          <Fragment forRoute='/about'><About /></Fragment>
          <Fragment forRoute='/count'><Count/></Fragment>
        </div>
      </Fragment>
    );
  }
}

export default connect(null,null)(App);

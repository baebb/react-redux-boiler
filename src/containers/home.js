import React from 'react';
import {connect} from 'react-redux';


class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Hi fam</p>
      </div>
    )
  }
}

export default connect()(Home);
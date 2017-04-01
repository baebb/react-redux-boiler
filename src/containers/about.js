import React from 'react';
import {connect} from 'react-redux';


class About extends React.Component {
  render() {
    return (
      <div>
        <p>About something</p>
      </div>
    )
  }
}

export default connect()(About);
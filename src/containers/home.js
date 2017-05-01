import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'redux-little-router';

import {navigateAbout, navigateCount} from '../actions/index';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
						<div className="text-center">
							<h1 className="text-center">Home</h1>
							{/*<Link href={{*/}
							{/*pathname: '/count',*/}
							{/*query: {*/}
							{/*test: 'ing'*/}
							{/*}*/}
							{/*}}>*/}
							{/*<Button>Count</Button>*/}
							{/*</Link>*/}
							<Button
								onClick={() => this.props.dispatch(navigateCount(3))}
							>
								Count to 3
							</Button>
							<Button
								onClick={() => this.props.dispatch(navigateAbout())}
							>
								About
							</Button>
						</div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect()(Home);
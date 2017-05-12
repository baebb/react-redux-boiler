import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'redux-little-router';


class About extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <div className="text-center">
              <h2>About</h2>
              <br/><br/>
              <p>This is a boilerplate that uses React, Redux and a few other useful goodies to help you to get started
                on your next cool web app</p>
              <p>See readme for more details and enjoy!</p>
              <p>:^)</p>
              <br/><br/>
              <Link href="/">
                <Button>Home</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect()(About);
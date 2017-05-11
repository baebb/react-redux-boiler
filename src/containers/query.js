import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'redux-little-router';


class Query extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} sm={6} smOffset={3}>
						<div className="text-center">
							<h2>Query</h2>
							<br/><br/>
              <p>Your string was:</p>
							<h4 className="big-number">{this.props.string}</h4>
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

function mapStateToProps(state) {
	return {
		string: state.router.query.string
	}
}

export default connect(mapStateToProps, null)(Query);
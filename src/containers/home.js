import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import {Link} from 'redux-little-router';

import {navigateAbout, navigateCount} from '../actions/index';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}
	
	handleChange(e) {
		this.setState({...this.state, value: e.target.value});
	}
	
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} sm={6} smOffset={3}>
						<div className="text-center">
							<h1 className="text-center">Home</h1>
							<div>
								<form>
									<FormGroup>
										<InputGroup>
											<InputGroup.Addon>Query</InputGroup.Addon>
											<FormControl
												type="text"
												value={this.state.value}
												placeholder="Enter number"
												onChange={this.handleChange.bind(this)}
											/>
											<InputGroup.Button>
												<Button
													onClick={() => this.props.dispatch(navigateCount(this.state.value))}
												>
													Go
												</Button>
											</InputGroup.Button>
										</InputGroup>
									</FormGroup>
								</form>
							</div>
							<div>
								<Button
									onClick={() => this.props.dispatch(navigateAbout())}
								>
									About
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default connect()(Home);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	state = {
		city: this.props.city
	};

	props: {
		city: string
	};

	// ToDO Add Google Search Autocomplete
	handleInput = event => {
		this.setState({ city: event.target.value });
	};

	render() {
		return (
			<div className="landing">
				<h1>AUTOLIST</h1>
				<input
					type="text"
					value={this.state.city}
					placeholder="Enter City Name"
					id="searchInput"
					onChange={this.handleInput}
				/>
				<Link to="/search">Search</Link>
				<Link to="/search" id="view-all">
					...or view all
				</Link>
			</div>
		);
	}
}

export default Landing;

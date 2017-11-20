import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

class App extends Component {
	state = {
		apiData: {
			records: []
		},
		apiUrl: '',
		city: ''
	};

	componentDidMount() {
		let currentLocation = {};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				currentLocation = {
					lat: position.coords.latitude,
					long: position.coords.longitude
				};

				axios
					.get(
						`http://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.lat},${currentLocation.long}&sensor=true`
					)
					.then(response => {
						currentLocation.userCity = response.data.results[0].address_components[2].long_name;
						currentLocation.userState = response.data.results[0].address_components[4].short_name;
						currentLocation.userZipcode = response.data.results[0].address_components[6].long_name;
						this.setState({ city: currentLocation.userCity });
						this.fetchCarApi(
							this.buildUrl(
								currentLocation.lat,
								currentLocation.long,
								currentLocation.userCity,
								currentLocation.userState
							)
						);
					});
			});
		}
	}

	buildUrl = (lat, long, city, state) => {
		const url = `https://autolist-test.herokuapp.com/search?page=1&location=${city},${state}&latitude=${lat}&longitude=${long}&price_min=0&price_max=1000000&radius=100`;
		return url;
	};

	fetchCarApi = url => {
		this.setState({ apiUrl: url });
		axios.get(url).then((response: { data: { payload: string } }) => {
			this.setState({ apiData: response.data });
		});
	};

	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Switch>
						<Route
							exact
							path="/"
							component={() => (
								<Landing city={this.state.city} fetchCarApi={this.fetchCarApi} buildUrl={this.buildUrl} />
							)}
						/>
						<Route
							path="/search"
							component={() => (
								<Search cars={this.state.apiData} url={this.state.apiUrl} fetchCarApi={this.fetchCarApi} />
							)}
						/>
						<Route
							path="/details/:id"
							component={props => (
								<Details
									cars={this.state.apiData.records.find(car => props.match.params.id === car.id.toString())}
									{...props}
								/>
							)}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

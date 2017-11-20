import React, { Component } from 'react';
import Header from './Header';
import Loading from './Loading';

class Details extends Component {
	state = {};
	props: {
		cars: Array<{
			make: string,
			model: string,
			vin: string,
			year: number,
			condition: string,
			mileage: string,
			city: string,
			state: string,
			price: string,
			dealer_name: string,
			display_color: string,
			distance_from_origin: number,
			trim: string
		}>
	};
	render() {
		let carDetails;
		if (this.props.cars) {
			const carColor = this.props.cars.display_color ? this.props.cars.display_color : 'Unavailable';
			carDetails = (
				<div id="vehicle-details-page">
					<section id="vehicle-overview" className="details-section">
						<img
							alt={`${this.props.cars.make}`}
							src={`${this.props.cars.thumbnail_url_large}`}
							className="vehicle-photo"
						/>
						<div className="overview-info">
							<h3>
								{this.props.cars.year} {this.props.cars.make} {this.props.cars.model}
							</h3>
							<p>Price: {this.props.cars.price}</p>
							<p>Mileage: {this.props.cars.mileage}</p>
						</div>
					</section>
					<section id="info-section" className="details-section">
						<h3>Basic Info</h3>
						<p>Condition: {this.props.cars.condition}</p>
						<p>Color: {carColor}</p>
						<p>Trim: {this.props.cars.trim}</p>
						<p>Vin: {this.props.cars.vin}</p>
					</section>
					<section id="seller-info-section" className="details-section">
						<h3>Seller Info</h3>
						<p>Dealer: {this.props.cars.dealer_name}</p>
						<p>
							Location: {this.props.cars.city}, {this.props.cars.state}
						</p>
						<p>Distance: {this.props.cars.distance_from_origin} miles away</p>
					</section>
				</div>
			);
		} else {
			carDetails = <Loading />;
		}
		return (
			<div className="details">
				<Header />
				<div>{carDetails}</div>
			</div>
		);
	}
}

export default Details;

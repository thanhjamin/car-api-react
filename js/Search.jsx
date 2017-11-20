import React, { Component } from 'react';
import Header from './Header';
import Loading from './Loading';
import CarCard from './CarCard';
import PriceFilter from './PriceFilter';

class Search extends Component {
  state = {
    priceMin: '',
    priceMax: ''
  };

  props: {
    cars: Array<{ make: string, city: string, vin: string }>,
    url: string,
    fetchCarApi: Function
  };

  handlePriceMinChange = event => {
    this.setState({ priceMin: event.target.value });
  };

  handlePriceMaxChange = event => {
    this.setState({ priceMax: event.target.value });
  };

  render() {
    let vehicleCard;
    if (this.props.cars.records.length) {
      vehicleCard = (
        <div className="container">
          <PriceFilter
            url={this.props.url}
            fetchCarApi={this.props.fetchCarApi}
            priceMin={this.state.priceMin}
            priceMax={this.state.priceMax}
            handlePriceMinChange={this.handlePriceMinChange}
            handlePriceMaxChange={this.handlePriceMaxChange}
          />
          <div className="vehicle-list">{this.props.cars.records.map(car => <CarCard key={car.id} {...car} />)}</div>
        </div>
      );
    } else {
      vehicleCard = <Loading />;
    }
    return (
      <div className="search">
        <Header showBack />
        {vehicleCard}
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';

class PriceFilter extends Component {
  state = {};

  props: {
    priceMin: string,
    priceMax: string,
    fetchCarApi: Function,
    handlePriceMinChange: Function,
    handlePriceMaxChange: Function,
    url: string
  };

  fetch = () => {
    const priceMaxParam = this.props.url.split('&')[5];
    const priceMinParam = this.props.url.split('&')[4];
    const currentMinPrice = priceMinParam.split('=')[1];
    const currentMaxPrice = priceMaxParam.split('=')[1];
    const updatedUrl = this.props.url
      .replace(`price_min=${currentMinPrice}`, `price_min=${this.props.priceMin}`)
      .replace(`price_max=${currentMaxPrice}`, `price_max=${this.props.priceMax}`);

    this.props.fetchCarApi(updatedUrl);
  };

  render() {
    return (
      <div className="vehicle-filter">
        <p>Price Range</p>
        <input
          type="text"
          defaultValue={this.props.priceMin}
          placeholder="MIN"
          onChange={this.props.handlePriceMinChange}
        />
        <input
          type="text"
          defaultValue={this.props.priceMax}
          placeholder="MAX"
          onChange={this.props.handlePriceMaxChange}
        />
        <button onClick={this.fetch}>Filter</button>
      </div>
    );
  }
}

export default PriceFilter;

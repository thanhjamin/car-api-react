import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  color: black;
  text-decoration: none;
  -moz-box-shadow: 0 2px 5px 0 #bcbdbe;
  -webkit-box-shadow: 0 2px 5px 0 #bcbdbe;
  box-shadow: 0 2px 5px 0 #bcbdbe;
  display: table;
  position: relative;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
`;

const CarCard = props => (
  <div>
    <Wrapper className="show-card" to={`/details/${props.id}`}>
      <img alt={`${props.make}`} src={`${props.thumbnail_url_large}`} className="vehicle-img" />
      <div className="vehicle-details">
        <div>
          <h3>
            {props.year} {props.make} {props.model}
          </h3>
          <p>Condition: {props.condition}</p>
          <p>Mileage: {props.mileage}</p>
          <p>
            Location: {props.city} {props.state}
          </p>
          <p>Vin: {props.vin}</p>
        </div>
      </div>
      <div className="vehicle-price">
        <h3>{props.price}</h3>
      </div>
    </Wrapper>
  </div>
);

CarCard.propTypes = {
  id: number.isRequired,
  vin: string.isRequired,
  condition: string.isRequired,
  make: string.isRequired,
  model: string.isRequired,
  thumbnail_url_large: string.isRequired,
  mileage: string.isRequired,
  price: string.isRequired,
  year: number.isRequired,
  city: string.isRequired,
  state: string.isRequired
};

export default CarCard;

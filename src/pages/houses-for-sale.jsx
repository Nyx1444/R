import React from 'react';
import './styles/houses-for-sale.css';
import Navbar from '../components/Navbar/Navbar';
import houseNearMeImage from '../img/housenearme.png';
import PropertyCard from '../helpers/Cards/PropertyCard';
import propertyData from '../data/properties';

const HousesForSale = () => {
  return (
    <>
      <Navbar />
      <div className="houses-for-sale">
        <div className="houses-for-sale__top">
          <div className="houses-for-sale__content">
            <h1>Houses for sale near me</h1>
            <p>
              Find houses for sale near you. View photos, open house information, and property details for nearby real estate.
            </p>
          </div>
          <div className="houses-for-sale__image">
            <img src={houseNearMeImage} alt="House Illustration" />
          </div>
        </div>

        <div className="houses-for-sale__form">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="City, Address, School, Agent, ZIP" />
          </div>
          <div className="form-group">
            <label htmlFor="price-range">Price range</label>
            <div className="price-group">
              <select>
                <option>No min</option>
                <option>$50k</option>
                <option>$100k</option>
              </select>
              <select>
                <option>No max</option>
                <option>$9M</option>
                <option>$10M</option>
              </select>
            </div>
          </div>
          <button>Search</button>
        </div>
      </div>

        <div className="houses-for-sale">
          <h1>Chicago houses for sale</h1>
          <div className="container">
            {propertyData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="see-all-link">
            <a href="#">See all {propertyData.length} Chicago houses for sale</a>
          </div>
        </div>

        <div className="houses-for-sale">
          <h1>Seattle houses for sale</h1>
          <div className="container">
            {propertyData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="see-all-link">
            <a href="#">See all {propertyData.length} Seattle houses for sale</a>
          </div>
        </div>

        <div className="houses-for-sale">
          <h1>Los Angeles houses for sale</h1>
          <div className="container">
            {propertyData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="see-all-link">
            <a href="#">See all {propertyData.length} Los Angeles houses for sale</a>
          </div>
        </div>

        <div className="houses-for-sale">
          <h1>San Diego houses for sale</h1>
          <div className="container">
            {propertyData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="see-all-link">
            <a href="#">See all {propertyData.length} San Diego houses for sale</a>
          </div>
        </div>

        <div className="houses-for-sale">
          <h1>Portland houses for sale</h1>
          <div className="container">
            {propertyData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="see-all-link">
            <a href="#">See all {propertyData.length} Portland houses for sale</a>
          </div>
        </div>

        <div className="houses-for-sale">
          <h1>Washington, DC houses for sale</h1>
          <div className="container">
            {propertyData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="see-all-link">
            <a href="#">See all {propertyData.length} Washington, DC houses for sale</a>
          </div>
        </div>
    </>
  );
};

export default HousesForSale;

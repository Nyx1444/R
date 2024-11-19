import React from 'react';
import './FeaturedListings.css';

const FeaturedListings = () => {
  return (
    <section className="featured-listings">
      <h3>Featured Listings</h3>
      <div className="listing">
        <img src="house1.jpg" alt="House 1" />
        <p>Beautiful 3-bedroom house in San Francisco</p>
      </div>
      <div className="listing">
        <img src="house2.jpg" alt="House 2" />
        <p>Modern condo in New York City</p>
      </div>
    </section>
  );
};

export default FeaturedListings;

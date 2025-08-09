import React from 'react';
import './App.css';
import PropertyCard from './components/PropertyCard';
import { propertyFeatures, priceIcon } from './data/propertyData';
import './styles/PropertyCard.css';

function App() {
  const propertyData = {
    price: '£250,000',
    estimatedValue: 'Estimated value',
    status: 'Passport not yet created',
    features: propertyFeatures,
    priceIcon: priceIcon
  };

  return (
    <div className="App">
      <PropertyCard {...propertyData} />
    </div>
  );
}

export default App;

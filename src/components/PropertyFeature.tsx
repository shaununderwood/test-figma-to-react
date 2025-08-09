import React from 'react';
import { PropertyFeature as PropertyFeatureType } from '../types/PropertyTypes';

interface PropertyFeatureProps {
  feature: PropertyFeatureType;
}

const PropertyFeature: React.FC<PropertyFeatureProps> = ({ feature }) => {
  return (
    <div className="property-feature">
      <img 
        src={feature.icon} 
        alt={feature.alt} 
        className="feature-icon"
      />
      <span className="feature-text">{feature.text}</span>
    </div>
  );
};

export default PropertyFeature; 
import React from 'react';
import { PropertyCardProps } from '../types/PropertyTypes';
import StatusTag from './StatusTag';
import PriceSection from './PriceSection';
import PropertyFeature from './PropertyFeature';

const PropertyCard: React.FC<PropertyCardProps> = ({
  price,
  estimatedValue,
  status,
  features,
  priceIcon
}) => {
  return (
    <div className="container">
      <div className="frame-2072751474">
        <StatusTag text={status} />
        
        <PriceSection 
          price={price}
          estimatedValue={estimatedValue}
          priceIcon={priceIcon}
        />
        
        <div className="frame-2072751505">
          {features.map((feature) => (
            <PropertyFeature 
              key={feature.id} 
              feature={feature} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 
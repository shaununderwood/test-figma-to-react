import React from 'react';

interface PriceSectionProps {
  price: string;
  estimatedValue: string;
  priceIcon: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ 
  price, 
  estimatedValue, 
  priceIcon 
}) => {
  return (
    <div className="frame-2072751507">
      <div className="frame-2072751498">
        <span className="price-text">{price}</span>
        <span className="estimated-value-text">{estimatedValue}</span>
      </div>
      <img 
        src={priceIcon} 
        alt="price icon" 
        className="price-icon"
      />
    </div>
  );
};

export default PriceSection; 
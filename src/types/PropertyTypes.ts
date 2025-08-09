export interface PropertyFeature {
  id: string;
  icon: string;
  text: string;
  alt: string;
}

export interface PropertyCardProps {
  price: string;
  estimatedValue: string;
  status: string;
  features: PropertyFeature[];
  priceIcon: string;
} 
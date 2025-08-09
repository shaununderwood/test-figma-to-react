import React from 'react';
import BoundariesCard from '../components/BoundariesCard';
import BoundaryQuestionContainer from '../components/BoundaryQuestionContainer';

const Page1: React.FC = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <BoundariesCard />
      <BoundaryQuestionContainer />
    </div>
  );
};

export default Page1;


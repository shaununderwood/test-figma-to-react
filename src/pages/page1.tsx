import React from 'react';
import BoundariesCard from '../components/BoundariesCard';
import BoundaryQuestionContainer from '../components/BoundaryQuestionContainer';
import BoundaryButtons from '../components/BoundaryButtons';

const Page1: React.FC = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <BoundariesCard />
      <BoundaryQuestionContainer />
      <BoundaryButtons />
    </div>
  );
};

export default Page1;


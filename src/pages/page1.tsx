import React, { useState } from 'react';
import BoundariesCard from '../components/BoundariesCard/BoundariesCard';
import BoundaryQuestionContainer from '../components/BoundaryQuestion/BoundaryQuestionContainer';
import BoundaryButtons, { ButtonSide } from '../components/BoundaryButtons';

// these will come from an API
const boundaryQuestions = [
  { id: 'seller', label: 'Seller' },
  { id: 'neighbour', label: 'Neighbour' },
  { id: 'shared', label: 'Shared' },
  { id: 'unknown', label: 'Unknown' },
];
const yesNoOptions = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
];
const questions = [
  {
    currentStepLabel: '1',
    question: 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: to the left?',
    options: boundaryQuestions,
  },
  {
    currentStepLabel: '1.1',
    question: 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: on the right?',
    options: boundaryQuestions,
  },
  {
    currentStepLabel: '1.2',
    question: 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: on the rear?',
    options: boundaryQuestions,
  },
  {
    currentStepLabel: '1.3',
    question: 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: on the front?',
    options: boundaryQuestions,
  },
  {
    currentStepLabel: '2',
    question: 'If the boundaries are irregular please indicate ownership by written description or by reference to a plan: ',
    options: [
      { id: 'write', label: 'Write Instructions' },
      { id: 'upload', label: 'Upload Plan' },
    ],
  },
  {
    currentStepLabel: '3',
    question: 'Is the seller aware of any boundary feature having been moved in the last 10 years, or during the seller’s period of ownership if longer?',
    options: yesNoOptions,
  },
  {
    currentStepLabel: '4',
    question: 'During the seller’s ownership, has any adjacent land or property been purchased by the seller?',
    options: yesNoOptions,
  },
  {
    currentStepLabel: '5',
    question: 'Does any part of the property overhang, or project under, the boundary of the neighbouring property or road, for example cellars under pavement, overhanging, eaves or covered walkways?',
    options: yesNoOptions,
  },
  {
    currentStepLabel: '6',
    question: 'Has any notice been received under the Party Wall Act 1996, in respect of any shared/party boundaries?',
    options: yesNoOptions,
  },
];

const Page1: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, options, currentStepLabel } = questions[currentQuestion];
  const total = questions.length;

  const onPress = (which: ButtonSide) => {
    if (which === 'left') {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      <BoundariesCard />
      <BoundaryQuestionContainer question={question} options={options} current={currentQuestion + 1} total={total} currentStepLabel={currentStepLabel} />
      <BoundaryButtons onPress={onPress} />
    </div>
  );
};

export default Page1;


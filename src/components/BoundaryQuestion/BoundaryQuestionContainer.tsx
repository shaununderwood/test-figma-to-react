import React, { useState } from 'react';
import BoundaryQuestionView from './BoundaryQuestion';

interface Props {
  question: string,
  options: any[],
  current: number,
  total: number,
  currentStepLabel?: string,
  onSelect?: (optionId: string) => void,
}

export default function BoundaryQuestionContainer(props: Props) {
  const { question, options, current, total, currentStepLabel } = props;
  const progressPercent = (100 / total) * current;
  const [selected, setSelected] = useState<string | undefined>(undefined);
  function handleSelect(optionId: string) {
    setSelected(optionId);
    // Emit a DOM CustomEvent so the page/app can listen globally if needed
    try {
      window.dispatchEvent(
        new CustomEvent('boundary:select', { detail: { optionId } })
      );
    } catch { }
  }
  return (
    <BoundaryQuestionView
      question={question || 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: to the left?'}
      options={options}
      progressPercent={Number.isFinite(progressPercent) ? progressPercent : 10}
      currentStep={current}
      currentStepLabel={currentStepLabel}
      totalSteps={total}
      selectedOptionId={selected}
      onSelect={handleSelect}
    />
  );
}

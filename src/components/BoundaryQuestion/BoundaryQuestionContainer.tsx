import React, { useState } from 'react';
import BoundaryQuestionView from './BoundaryQuestion';

export default function BoundaryQuestionContainer() {
  const question = 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: to the left?';
  const options = [
    { id: 'seller', label: 'Seller' },
    { id: 'neighbour', label: 'Neighbour' },
    { id: 'shared', label: 'Shared' },
    { id: 'unknown', label: 'Unknown' },
  ];
  const { current, total } = { current: 1, total: 12 };
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
      totalSteps={total}
      selectedOptionId={selected}
      onSelect={handleSelect}
    />
  );
}

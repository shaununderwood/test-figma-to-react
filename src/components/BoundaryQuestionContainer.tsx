import React, { useMemo, useState } from 'react';
import BoundaryQuestionView, { BoundaryOption } from './BoundaryQuestion';
import uidl from '../pages/boundary-question.json';

function extractQuestion(): string {
  return 'Looking towards the property from the road, who owns or accepts responsibility to maintain or repair the boundary features: to the left?';
}

function extractOptions(): BoundaryOption[] {
  try {
    const component: any = uidl.componentUIDLs?.[0]?.node?.content;
    const children: any[] = component?.children ?? [];
    const optionsContainer = children.find(
      (n: any) => n?.type === 'element' && n?.content?.name === 'Container'
    );
    const buttons: any[] = optionsContainer?.content?.children ?? [];
    const labels: string[] = buttons.map((btn: any) => btn?.content?.children?.[0]?.content?.children?.[0]?.content).filter(Boolean);
    return labels.map((label) => ({ id: label.toLowerCase(), label }));
  } catch {
    return [
      { id: 'seller', label: 'Seller' },
      { id: 'neighbour', label: 'Neighbour' },
      { id: 'shared', label: 'Shared' },
      { id: 'unknown', label: 'Unknown' },
    ];
  }
}
function extractProgressPercent(): number {
  try {
    const component: any = uidl.componentUIDLs?.[0]?.node?.content;
    // Find Filled width and Track width
    const findByName = (node: any, name: string): any | undefined => {
      if (!node) return undefined;
      if (node?.type === 'element' && node?.content?.name === name) return node;
      const kids: any[] = node?.content?.children ?? [];
      for (const k of kids) {
        const r = findByName(k, name);
        if (r) return r;
      }
      return undefined;
    };
    const track = findByName(component, 'Track');
    const filled = findByName(component, 'Filled');
    const trackWidth = Number(track?.content?.style?.width?.content ?? 0);
    const filledWidth = Number(filled?.content?.style?.width?.content ?? 0);
    if (trackWidth > 0) return (filledWidth / trackWidth) * 100;
    return 0;
  } catch {
    return 0;
  }
}

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

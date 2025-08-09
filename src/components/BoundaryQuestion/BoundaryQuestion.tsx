import React, { useMemo, useState, useEffect, useCallback } from 'react';

export type BoundaryOption = {
  id: string;
  label: string;
};

type Props = {
  question: string;
  options: BoundaryOption[]; // expect 4
  progressPercent: number; // 0..100
  selectedOptionId?: string;
  onSelect?: (optionId: string) => void;
  currentStep?: number;
  totalSteps?: number;
};

export default React.memo(BoundaryQuestion);

function BoundaryQuestion(props: Props) {
  const {
    question,
    options,
    progressPercent,
    selectedOptionId,
    onSelect,
    currentStep,
    totalSteps,
  } = props;

  const [internalSelected, setInternalSelected] = useState<string | undefined>(
    selectedOptionId
  );

  useEffect(() => { setInternalSelected(selectedOptionId); }, [selectedOptionId]);

  const activeId = selectedOptionId ?? internalSelected;
  const clampedProgress = useMemo(
    () => Math.max(0, Math.min(100, Number.isFinite(progressPercent) ? progressPercent : 0)),
    [progressPercent]
  );

  const handleSelect = useCallback((id: string) => {
    if (selectedOptionId === undefined) setInternalSelected(id);
    onSelect?.(id);
  }, [onSelect, selectedOptionId]);

  const cx = (...c: (string|false|undefined)[]) => c.filter(Boolean).join(' ');

  const OPT_BASE = 'flex justify-center items-center self-stretch h-[44px] w-full rounded-[12px] border-[0.5px] border-solid overflow-hidden transition-colors';
  const OPT_BORDER = 'border-[rgba(60,60,67,0.3)]';
  const OPT_ACTIVE = 'bg-[rgba(0,161,154,1)] text-white';
  const OPT_IDLE = 'bg-[rgba(255,255,255,1)] text-[rgba(0,0,0,1)]';

  const OptionButton = React.memo(({ id, label, active, onPick }:{id:string;label:string;active:boolean;onPick:(id:string)=>void}) => (
    <button
      role="radio"
      aria-checked={active}
      tabIndex={active ? 0 : -1}
      onClick={() => onPick(id)}
      className={cx('bq__option', OPT_BASE, OPT_BORDER, active ? 'bg-[rgba(0,161,154,1)]' : 'bg-[rgba(255,255,255,1)]')}
    >
      <span className={cx('bq__option-label','text-[15px] leading-5 text-center', active ? 'text-white' : 'text-[rgba(0,0,0,1)]')}>{label}</span>
    </button>
  ));

  return (
    <section
      className={[
        'bq',
        'w-full h-auto flex flex-col justify-between items-center gap-4',
        'px-4 py-6',
        'rounded-[16px] border border-solid overflow-hidden',
        'bg-[rgba(243,245,250,1)] border-[rgba(179,183,188,0.33)]',
      ].join(' ')}
      aria-label="Boundary question"
    >
      <div className={[
        'bq__question',
        'w-full flex items-start gap-4 px-4',
      ].join(' ')}>
        <span className={[
          'bq__number',
          'text-[20px] leading-[25px] text-[rgba(23,23,23,1)]',
          'font-["Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif] font-normal',
        ].join(' ')}>
          {currentStep ? `${currentStep}.` : ''}
        </span>
        <span className={[
          'bq__text',
          'text-[16px] leading-[23px] text-left flex-1',
          'text-[rgba(23,23,23,1)]',
          'font-["Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif] font-semibold',
        ].join(' ')}>
          {question}
        </span>
      </div>

      <div className={[
        'bq__options',
        // Layout like the first image: 2x2 grid within 327x96 container
        'w-[327px] h-[96px] grid grid-cols-2 grid-rows-2 gap-2 px-4 shrink-0',
      ].join(' ')}>
        {options.map((opt) => {
          const isActive = activeId === opt.id;
          return (
            <OptionButton
              key={opt.id}
              id={opt.id}
              label={opt.label}
              active={isActive}
              onPick={handleSelect}
            />
          );
        })}
      </div>

      <div className={[
        'bq__progress',
        'w-full flex flex-col items-start',
      ].join(' ')}>
        <div className={[
          'bq__progressbar',
          'w-[338px] h-11 flex items-start gap-[7px] px-4 relative self-stretch',
        ].join(' ')}>
          <div className={[
            'bq__progress-track',
            'absolute top-5 left-4 w-[306px] h-1 rounded-full',
            'bg-[rgba(120,120,128,0.16)]',
          ].join(' ')}>
            <div
              className={[
                'bq__progress-fill',
                'h-1 rounded-full',
                'bg-[rgba(0,161,154,1)]',
                'transition-all',
              ].join(' ')}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        </div>
        {currentStep && totalSteps ? (
          <div className={[
            'bq__step',
            'flex flex-col justify-center items-center px-4 self-stretch',
          ].join(' ')}>
            <span className={[
              'bq__step-text',
              'text-[15px] leading-5 text-right self-stretch',
              'text-[rgba(0,161,154,1)]',
              'font-["SF_Pro","Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif] font-semibold',
            ].join(' ')}>
              {currentStep} of {totalSteps}
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}



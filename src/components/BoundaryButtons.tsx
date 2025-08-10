import React from 'react';
import { ReactComponent as IconLeft } from './icon-double-arrow-left.svg';
import { ReactComponent as IconOverview } from './icon-overview.svg';

export type ButtonSide = 'left' | 'center' | 'right';

type Props = {
  leftEnabled?: boolean;
  rightEnabled?: boolean;
  onPress?: (which: ButtonSide) => void;
  className?: string;
};

const onPressHandler = (which: ButtonSide) => {
  // eslint-disable-next-line no-console
  console.log('BoundaryButtons pressed:', which);
}

export default function BoundaryButtons({
  leftEnabled = true,
  rightEnabled = true,
  onPress = onPressHandler,
  className = '',
}: Props) {
  function emit(which: ButtonSide) {
    onPress?.(which);
    try {
      window.dispatchEvent(
        new CustomEvent('boundary:buttons', { detail: { action: which } })
      );
    } catch {}
  }

  return (
    <div
      className={[
        'bb',
        'w-full flex items-center justify-between gap-2 px-4',
        className,
      ].join(' ')}
      aria-label="Boundary navigation buttons"
    >
      {/* Left circular button */}
      <button
        type="button"
        disabled={!leftEnabled}
        onClick={() => emit('left')}
        className={[
          'bb__btn bb__btn--left',
          'flex items-center justify-center gap-1 shrink-0',
          'w-[34px] h-[34px] rounded-full',
          'bg-[rgba(0,161,154,1)]',
          !leftEnabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        ].join(' ')}
        aria-label="Previous"
      >
        <IconLeft className="bb__icon" />
      </button>

      {/* Centre pill button with icon + label */}
      <button
        type="button"
        onClick={() => emit('center')}
        className={[
          'bb__btn bb__btn--center',
          'flex items-center justify-center gap-1 rounded-[40px]',
          'bg-[rgba(0,161,154,1)] px-[14px] py-[7px] text-white',
          'cursor-pointer',
        ].join(' ')}
        aria-label="Overview"
      >
        <IconOverview className="bb__icon" />
        <span
          className={[
            'bb__label',
            'text-[15px] leading-5 text-left',
            'font-["SF_Pro","Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif] font-normal',
          ].join(' ')}
        >
          Overview
        </span>
      </button>

      {/* Right circular button */}
      <button
        type="button"
        disabled={!rightEnabled}
        onClick={() => emit('right')}
        className={[
          'bb__btn bb__btn--right',
          'flex items-center justify-center gap-1 shrink-0',
          'w-[34px] h-[34px] rounded-full',
          'bg-[rgba(0,161,154,1)]',
          !rightEnabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        ].join(' ')}
        aria-label="Next"
      >
        <IconLeft className="bb__icon transform rotate-180" />
      </button>
    </div>
  );
}



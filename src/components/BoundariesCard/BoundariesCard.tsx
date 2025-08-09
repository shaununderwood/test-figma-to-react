import React, { useMemo } from 'react';
import uidl from '../../pages/boundaries-component.json';
import { findImageByName } from '../utils/uidl';

type Props = {
  title?: string;
  subtitle?: string;
  imageName?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

function BoundariesCard({
  title = 'Boundaries',
  subtitle = 'Need Help?',
  imageName = 'retro1',
  ctaLabel = 'Play Video',
  onCta,
  className = '',
}: Props) {
  const root = uidl.componentUIDLs?.[0]?.node;
  const retroImg = useMemo(() => findImageByName(root, imageName), [root, imageName]);
  const playImg = useMemo(() => findImageByName(root, 'Play'), [root]);

  return (
    <section
      className={[
        'boundaries',
        'w-full h-auto flex flex-col justify-center items-end gap-4 p-4',
        'rounded-[16px] border border-solid overflow-hidden',
        'bg-[rgba(243,245,250,1)] border-[rgba(179,183,188,0.33)]',
        className,
      ].join(' ')}
      aria-label="Boundaries"
    >
      <div className="boundaries__top flex items-center gap-4 w-full">
        <div className="boundaries__media flex items-center gap-2 grow">
          {retroImg?.src && (
            <img
              className="boundaries__image w-36 h-36 object-cover"
              src={retroImg.src}
              alt={retroImg.alt}
              width={144}
              height={144}
              loading="lazy"
            />
          )}
          <div className="boundaries__texts flex flex-col items-start grow shrink-0 w-[184px]">
            <h2 className='boundaries__title text-[20px] leading-[25px] font-semibold text-[rgba(35,29,69,1)] font-["Plus_Jakarta_Sans"]'>
              {title}
            </h2>
            <span className='boundaries__subtitle text-[14px] leading-[17px] font-medium text-[rgba(0,161,154,1)] font-["Plus_Jakarta_Sans"]'>
              {subtitle}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={ctaLabel}
        onClick={onCta}
        className={[
          'boundaries__button',
          'h-8 flex justify-center items-center gap-2 px-3 py-[6px] shrink-0',
          'rounded-[100px] border border-solid overflow-hidden',
          'bg-[rgba(0,161,154,1)] border-transparent text-[rgba(255,255,255,1)]',
        ].join(' ')}
      >
        {playImg?.src && (
          <img
            className="boundaries__button-icon w-6 h-6"
            src={playImg.src}
            alt={playImg.alt}
            width={24}
            height={24}
            loading="lazy"
          />
        )}
        <span className='boundaries__button-text text-[14px] leading-[17px] font-medium text-center text-[rgba(255,255,255,1)] font-["Plus_Jakarta_Sans"]'>
          {ctaLabel}
        </span>
      </button>
    </section>
  );
}

export default React.memo(BoundariesCard);



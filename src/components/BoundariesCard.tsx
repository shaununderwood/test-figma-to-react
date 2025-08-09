import React from 'react';
import uidl from '../pages/boundaries-component.json';

type UIDLNode = any;

function findImageByName(name: string): { src: string; alt: string } | null {
  try {
    const component: UIDLNode | undefined = uidl.componentUIDLs?.[0]?.node?.content;
    const children: UIDLNode[] = component?.children ?? [];
    const stack: UIDLNode[] = [...children];
    while (stack.length) {
      const node = stack.pop();
      if (!node || node.type !== 'element') continue;
      const c = node.content;
      if (c?.elementType === 'image' && c?.name === name) {
        return {
          src: c?.attrs?.src?.content ?? '',
          alt: c?.attrs?.alt?.content ?? name,
        };
      }
      const kids: UIDLNode[] = c?.children ?? [];
      for (const k of kids) stack.push(k);
    }
  } catch {}
  return null;
}

const retroImg = findImageByName('retro1');
const playImg = findImageByName('Play');

export default function BoundariesCard() {
  return (
    <section
      className={[
        // BEM block
        'boundaries',
        // Tailwind
        'w-full h-auto flex flex-col justify-center items-end gap-4 p-4',
        'rounded-[16px] border border-solid overflow-hidden',
        'bg-[rgba(243,245,250,1)] border-[rgba(179,183,188,0.33)]',
      ].join(' ')}
      aria-label="Boundaries"
    >
      <div className={[
        'boundaries__top',
        'flex items-center gap-4 w-full',
      ].join(' ')}>
        <div className={[
          'boundaries__media',
          'flex items-center gap-2 grow',
        ].join(' ')}>
          {retroImg?.src ? (
            <img
              className="boundaries__image w-36 h-36 object-cover"
              src={retroImg.src}
              alt={retroImg.alt || 'illustration'}
              width={144}
              height={144}
            />
          ) : null}

          <div className={[
            'boundaries__texts',
            'flex flex-col items-start grow shrink-0 w-[183.86px]',
          ].join(' ')}>
            <span
              className={[
                'boundaries__title',
                'text-[20px] leading-[25px] font-semibold',
                'text-[rgba(35,29,69,1)]',
                'font-["Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif]'
              ].join(' ')}
            >
              Boundaries
            </span>
            <span
              className={[
                'boundaries__subtitle',
                'text-[14px] leading-[17px] font-medium',
                'text-[rgba(0,161,154,1)]',
                'font-["Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif]'
              ].join(' ')}
            >
              Need Help?
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Play Video"
        className={[
          'boundaries__button',
          'h-8 flex justify-center items-center gap-2 px-3 py-[6px] shrink-0',
          'rounded-[100px] border border-solid overflow-hidden',
          'bg-[rgba(0,161,154,1)] border-transparent',
          'text-[rgba(255,255,255,1)]',
        ].join(' ')}
      >
        {playImg?.src ? (
          <img
            className="boundaries__button-icon w-6 h-6"
            src={playImg.src}
            alt={playImg.alt || 'Play'}
            width={24}
            height={24}
          />
        ) : null}
        <span
          className={[
            'boundaries__button-text',
            'text-[14px] leading-[17px] font-medium text-center',
            'text-[rgba(255,255,255,1)]',
            'font-["Plus_Jakarta_Sans",system-ui,-apple-system,"Segoe_UI",Roboto,Helvetica,Arial,sans-serif]'
          ].join(' ')}
        >
          Play Video
        </span>
      </button>
    </section>
  );
}



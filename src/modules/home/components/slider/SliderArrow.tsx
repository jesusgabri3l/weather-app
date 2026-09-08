import type { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  direction: 'prev' | 'next';
}

// react-slick clones this element and injects className/style/onClick
// (plus currentSlide/slideCount, which we don't need) at render time.
function SliderArrow({ className, style, onClick, direction }: Props) {
  return (
    <button
      type="button"
      className={`${className ?? ''} slider-arrow`}
      style={style}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous location' : 'Next location'}
    >
      <i className={`fa fa-chevron-${direction === 'prev' ? 'left' : 'right'}`} aria-hidden="true" />
    </button>
  );
}

export default SliderArrow;

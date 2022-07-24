import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export function Slider({
  children, slides = { perView: 'auto', spacing: 10 }, loop = true, drag = true, mode = 'snap', breakpoints = {},
}: any) {
  const [sliderRef] = useKeenSlider({
    loop,
    mode,
    drag,
    slides,
    breakpoints,
  });
  return (
    <div ref={sliderRef} className="keen-slider" style={{ maxWidth: '100%' }}>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {children.map((node: JSX.Element, index: number) => <div key={index} className="keen-slider__slide" style={{ maxWidth: '150px', minWidth: '150px' }}>{node}</div>)}
    </div>
  );
}

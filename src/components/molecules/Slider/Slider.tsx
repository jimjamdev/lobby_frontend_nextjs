import { useKeenSlider } from 'keen-slider/react';

import { SliderContainer, SliderItem } from '~components/molecules/Slider/Slider.style';

export function Slider({
  children,
  slides = { perView: 'auto', spacing: 10 },
  loop = true,
  drag = true,
  mode = 'snap',
  breakpoints = {},
}: any) {
  const [sliderRef] = useKeenSlider({
    loop,
    mode,
    drag,
    slides,
    breakpoints,
  });
  return (
    <SliderContainer ref={sliderRef} className="keen-slider" style={{ maxWidth: '100%' }}>
      {children.map((node: JSX.Element, index: number) => (
        <SliderItem
          key={index}
          className="keen-slider__slide"
          style={{ maxWidth: '150px', minWidth: '150px' }}
        >
          {node}
        </SliderItem>
      ))}
    </SliderContainer>
  );
}

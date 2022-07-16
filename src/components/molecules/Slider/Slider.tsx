import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function Slider({
  children, slides = { perView: 1 }, loop = true, drag = true,
}: any) {
  const themeContext = useContext(ThemeContext);
  console.log('**themeContext', themeContext);
  const [sliderRef] = useKeenSlider({
    loop,
    drag,
    slides,
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 3, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 5, spacing: 10 },
      },
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {children.map((node: JSX.Element, index: number) => <div key={index} className="keen-slider__slide">{node}</div>)}
    </div>
  );
}

import { SliderContainer } from './Slider.style';

export function Slider({ children, showItems = 5, numberOfItems = 10 }) {
  return (
    <SliderContainer>
      {children.map((node, index) => (
        <div key={index}>
          {node}
        </div>
      ))}
    </SliderContainer>
  );
}

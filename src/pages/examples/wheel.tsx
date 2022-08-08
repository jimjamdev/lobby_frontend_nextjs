import { Reorder } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

import { Container } from '~components/atoms/Container';
import { DefaultLayout } from '~layouts/DefaultLayout';
import { TPage } from '~types/pages';

const diameter = 500;
const sliceCount = 12;
const radius = diameter / 2;
const circumference = (6.283185307 * radius);
const sliceHeight = circumference / sliceCount;
const sliceOffset = sliceHeight / 2;
const slices = Array.from(Array(sliceCount).keys());

const WheelTable = styled.div`
  width: ${diameter}px;
  height: ${diameter}px;
  position: relative;
  overflow: hidden;
`;

const Wheel = styled.div`
  background: tomato;
  border-radius: ${radius}px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Slice = styled.div`
  background: blue;
  transform-origin: left center;
  z-index: 150;
  position: absolute;
  top: calc(50% - ${sliceOffset});
  height: ${sliceHeight};
  left: 50%;
  width: 50%;
  color: white;
  text-align: right;
  padding-right: 10px;
  display: block;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &:before {
    margin-bottom: -1px;
    margin-top: -2px;
    border-width: 0 0 ((${sliceHeight} / 2) + 4px) ${radius};
    border-color: transparent transparent blue transparent;
  }

  &:after {
    margin-top: -1px;
    margin-bottom: -2px;
    border-width: 0 ${radius} ((${sliceHeight} / 2) + 4px) 0;
    border-color: transparent blue transparent transparent;
  }
`;

// eslint-disable-next-line react/function-component-definition
const WheelExample: TPage = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <Container>
      <WheelTable>
        <Wheel>
          {slices.map((slice, index) => (
            <Slice key={slice} style={{ transform: `rotate(${360 / index})` }} />
          ))}
        </Wheel>
      </WheelTable>
    </Container>
  );
};

WheelExample.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default WheelExample;

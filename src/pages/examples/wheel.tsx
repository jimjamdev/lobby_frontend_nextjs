import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { TPage } from '~types/pages';

// eslint-disable-next-line react/function-component-definition
const WheelExample: TPage = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          <div>{item}</div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default WheelExample;

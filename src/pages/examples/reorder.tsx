import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Container } from '~components/atoms/Container';
import { DefaultLayout } from '~layouts/DefaultLayout';
import { TPage } from '~types/pages';

// eslint-disable-next-line react/function-component-definition
const ReorderExample: TPage = () => {
  const [items, setItems] = useState(['🍅 Tomato', '🥒 Cucumber', '🧀 Cheese', '🥬 Lettuce']);

  useEffect(() => {
    setTimeout(() => {
      setItems(['🥒 Cucumber', '🍅 Tomato', '🧀 Cheese', '🥬 Lettuce']);
    }, 1000);
  }, []);

  return (
    <Container>
      <motion.div layout>
        {items.map((item) => (
          <motion.div key={item} layout transition={{ duration: 2 }}>
            <li
              key={item}
              style={{
                display: 'flex', alignItems: 'center', background: 'tomato', height: '100px', padding: '1rem',
              }}
            >
              {item}
            </li>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

ReorderExample.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ReorderExample;

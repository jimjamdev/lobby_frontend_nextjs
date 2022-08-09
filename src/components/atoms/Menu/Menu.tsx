import React, { useState } from 'react';

export function Menu({ items }) {
  const [displayChildren, setDisplayChildren] = useState({});

  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          {item.title}{' '}
          {item.children && (
          <button
            onClick={() => {
              setDisplayChildren({
                ...displayChildren,
                [item.title]: !displayChildren[item.title],
              });
            }}
          >
            {displayChildren[item.title] ? '-' : '+'}
          </button>
          )}
          {displayChildren[item.title] && item.children && <Menu items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

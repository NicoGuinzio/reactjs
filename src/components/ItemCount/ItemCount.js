import React, { useState } from 'react';

export function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has comprado {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Comprar
      </button>
    </div>
  );
}
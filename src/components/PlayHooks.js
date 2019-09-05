import React, { useState } from 'react';

export default function PlayHooks() {
  const [count, updateCount] = useState(0);
  const [input, updateInput] = useState('');

  const handleCount = () => updateCount(prevCount => prevCount + 1);
  const handleInputCount = ({ target }) => updateInput(target.value);

  return (
    <>
      <h1>Happy! It maybe works!</h1>
      <h1>{count}</h1>
      <button onClick={handleCount}>Add</button>
      <input type="text" value={input} onChange={handleInputCount} />
    </>
  );
}

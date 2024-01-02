import { useState } from 'react';

function Counter({ children }) {

  const [num, setNum] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setNum((num) => num + 1);
  }
  return (
    <>
      <h1 style={{ color: 'white' }}>{num}</h1>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default Counter;

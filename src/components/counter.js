import { useState } from 'react';
function Counter({ children }) {
  let [num, setNum] = useState(0);
  function handleClick(e) {
    e.stopPropagation();
    setNum(num + 1);
    console.log('num===>', num);
  }
  return (
    <>
      <h1 style={{ color: 'white' }}>{num}</h1>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default Counter;

import { useState } from 'react';
function Counter() {
  let [num, setNum] = useState(0);
  function handleClick(e) {
    // e.preventDefault();
    setNum(num++);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleClick}></button>
    </>
  );
}

export default Counter;

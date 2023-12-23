import { useState } from 'react';

function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // e.preventDefault();
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }
  return (
    <>
      <button onClick={handleClick}>
        {children}: {playing ? '▶️' : '⏸️'}
      </button>
    </>
  );
}

export default PlayButton;

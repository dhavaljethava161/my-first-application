// import { useState } from 'react';
import '../css/PlayButton.css';
function PlayButton({ children, onPlay, onPause }) {
  let playing = false;
  function handleClick(e) {
    e.stopPropagation();
    playing === true ? onPlay() : onPause();
    playing = !playing;
  }
  return (
    <button onClick={handleClick}>
      {children}:{playing ? '▶️' : '⏸️'}
    </button>
  );
}

export default PlayButton;

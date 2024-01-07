import { memo, useContext, useState } from 'react';
import '../css/PlayButton.css';
import ThemeContext from '../context/themeContext';

const PlayButton = memo(function PlayButton({ children, onPlay, onPause }) {
  const theme = useContext(ThemeContext);
  let [playing, setPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    playing === true ? onPlay() : onPause();
    setPlaying(!playing);
  }
  return (
    <button className={theme} onClick={handleClick}>
      {children}:{playing ? '▶️' : '⏸️'}
    </button>
  );
});

export default PlayButton;

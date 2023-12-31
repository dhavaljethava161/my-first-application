import { memo, useContext } from 'react';
import '../css/Video.css';
import ThemeContext from '../context/themeContext';
import useVideoDispatch from '../hooks/VideoDispatch';
const Video = memo(function Video({
  title,
  channel,
  views,
  time,
  verified,
  id,
  children,
  editVideo,
}) {
  const dispatch = useVideoDispatch();
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className='close'
          onClick={() => dispatch({ type: 'DELETE', payload: id })}>
          X
        </button>
        <button className='edit' onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className='pic'>
          <img
            // src={`https://picsum.photos/id/${id}/160/90`}
            src={`https://picsum.photos/seed/picsum/160/90`}
            alt='Katherine Johnson'
          />
        </div>
        <div className='title'>{title}</div>
        <div className='channel'>
          {(channel = 'Dhaval Jethava')}
          {verified === true && '✅'}
        </div>
        <div className='views'>
          {views} views<span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
});

export default Video;

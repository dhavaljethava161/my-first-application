import React, { useCallback, useEffect } from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
import useVideo from '../hooks/Videos';
import axios from 'axios';
import useVideoDispatch from '../hooks/VideoDispatch';

function VideoList({ editVideo }) {
  const videos = useVideo();
  const dispatch = useVideoDispatch();
  const url = 'http://localhost:3500/video/getvideos';

  async function handleGetVideos() {
    const response = await axios.get(url);
    console.log('response===>', response.data.result);
    dispatch({ type: 'LOAD', payload: response.data.result });
  }

  useEffect(() => {
    async function getVideos() {
      const response = await axios.get(url);
      console.log('response===>', response.data.result);
      dispatch({ type: 'LOAD', payload: response.data.result });
    }
    getVideos();
  }, [dispatch]);

  const Play = useCallback(() => console.log('Play'),[]);
  const Pause = useCallback(() => console.log('Pause'),[]);

  return (
    <>
      {videos.map(({ title, channel, views, time, verified, id }) => (
        <Video
          key={id}
          title={title}
          channel={channel}
          views={views}
          time={time}
          verified={verified}
          id={id}
          editVideo={editVideo}>
          <PlayButton onPlay={Play} onPause={Pause}>
            {title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleGetVideos}>Get videos</button>
    </>
  );
}

export default VideoList;

import React from 'react';
import Video from './Video';
import PlayButton from './PlayButton';

function VideoList({ videos }) {
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
          id={id}>
          <PlayButton
            onPlay={() => console.log('Play', title)}
            onPause={() => console.log('Pause', title)}>
            {title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;
import { useState } from 'react';
import '../css/AddVideo.css';

const intialVideoState = {
  time: '2 Month ago',
  channel: 'Dhaval Jethava',
  verified: true,
  title: '',
  views: '',
};
function AddVideo({ addingVideo }) {
  const [video, setVideos] = useState(intialVideoState);
  function handleSubmit(e) {
    e.preventDefault();
    addingVideo(video);
    setVideos(intialVideoState);
  }
  function handleChange(e) {
    setVideos({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input
        type='text'
        name='title'
        onChange={handleChange}
        placeholder='title'
        value={video.title}
      />
      <input
        type='text'
        name='views'
        onChange={handleChange}
        placeholder='views'
        value={video.views}
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videosDb.length + 1,
        //       title: 'GraphQL',
        //       views: '585',
        //       time: '1 Month ago',
        //       verified: false,
        //     },
        //   ]);
        // }
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;

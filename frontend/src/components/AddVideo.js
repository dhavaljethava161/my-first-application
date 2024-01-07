import { useEffect, /*useRef,*/ useState } from 'react';
import '../css/AddVideo.css';
import useVideoDispatch from '../hooks/VideoDispatch';

const intialVideoState = {
  time: '2 Month ago',
  channel: 'Dhaval Jethava',
  verified: true,
  title: '',
  views: '',
};
function AddVideo({ editableVideo }) {
  const [video, setVideos] = useState(intialVideoState);
  const dispatch = useVideoDispatch();
  // const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (editableVideo) {
      dispatch({ type: 'UPDATE', payload: video });
    } else {
      dispatch({ type: 'ADD', payload: video });
    }
    setVideos(intialVideoState);
  }

  function handleChange(e) {
    setVideos({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) setVideos(editableVideo);
    // inputRef.current.focus();
  }, [editableVideo]);

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
      <button onClick={handleSubmit}>
        {editableVideo ? 'Edit' : 'Add'} Video
      </button>
    </form>
  );
}

export default AddVideo;

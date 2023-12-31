import './css/App.css';
import './index.css';
// import { videosDb } from './data/data';
import { useCallback, useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/themeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';

function App() {
  const [mode, setMode] = useState('darkMode');
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case 'LOAD':
        return action.payload;

      case 'DELETE':
        return videos.filter((video) => video.id !== action.payload);

      case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;

      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, []);

  const editVideo = useCallback(
    function editVideo(id) {
      setEditableVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <div className={`App ${mode}`}>
              <button
                onClick={() =>
                  setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')
                }>
                Mode
              </button>
              <AddVideo editableVideo={editableVideo}></AddVideo>
              <VideoList editVideo={editVideo}></VideoList>
            </div>
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

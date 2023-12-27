import './css/App.css';
import './index.css';
import { videosDb } from './data/data';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {
  const [videos, setVideos] = useState(videosDb);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className='App'>
      <AddVideo addingVideo={addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;

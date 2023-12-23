import Video from './components/Video';
import './css/App.css';
import { videos } from './data/data';
function App() {
  return (
      <div className='App'>
        <div className='pic'></div>
        {videos.map(({ title, channel, views, time, verified , id }) => (
          <Video
            title={title}
            channel={channel}
            views={views}
            time={time}
            verified={verified}
            id={id}></Video>
        ))}
      </div>
  );
}

export default App;

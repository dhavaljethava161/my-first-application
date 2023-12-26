import PlayButton from './components/PlayButton';
import Video from './components/Video';
import './css/App.css';
import './index.css';
import { videos } from './data/data';
import Counter from './components/Counter';
function App() {
  return (
    <div className='App'>
      <div className='pic'>Videos</div>
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
      <div style={{ clear: 'both' }}></div>
      <Counter>Add</Counter>
    </div>
  );
}

export default App;

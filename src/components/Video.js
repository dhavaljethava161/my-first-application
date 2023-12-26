import '../css/Video.css';
function Video({ title, channel, views, time, verified, id, children }) {
  return (
    <div className='container'>
      <div>
        <img
          src={`https://picsum.photos/id/${id}/160/90`}
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
  );
}

export default Video;

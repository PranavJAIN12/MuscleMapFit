import React from 'react';

export default function ExerciseVideos({ exerciseVideos = [], name }) {
  return (
    <div>
      {/* <p>heee</p> */}
      <h3>Watch {name} videos</h3>
      {exerciseVideos.length > 0 ? (
        <div className='exercise-video-data'>
          {exerciseVideos.slice(0,5).map((item, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              key={index}
              className='exercise-video-item'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt='data' />
            </a>
          ))}
        </div>
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
}

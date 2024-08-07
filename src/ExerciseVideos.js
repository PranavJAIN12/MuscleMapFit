/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './ExerciseVideo.css'
import yt from './components/Images/icons8-youtube-120.png'
export default function ExerciseVideos({ exerciseVideos = [], name }) {
  return (
    <div>
     
      <h3 className='text-center'>Watch {name.charAt(0).toUpperCase()+name.slice(1)} videos</h3>
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
              <img className='mainimg' src={item.video.thumbnails[0].url} alt='data'  />
              <img className='yt' src={yt}/>
            </a>
          ))}
        </div>
      ) : (
        <p className='text-center'>No videos available</p>
      )}
    </div>
  );
}

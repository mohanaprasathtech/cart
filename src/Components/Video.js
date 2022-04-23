import React from 'react';
import ReactPlayer from 'react-player'
import "./Video.css"

function Video({volumes,videos}) {
    return (
        <div className="video-content">
          <img className="picture" src="https://www.pinclipart.com/picdir/big/94-948489_tv-border-frame-transparent-clipart.png" alt="" srcset="" />
          <ReactPlayer autoplay={true} controls={true} className="video-player" loop volume={volumes} url={videos}/>
        </div>
    )
}

export default Video

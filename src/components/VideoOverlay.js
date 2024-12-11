import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoOverlay.css";
import video1 from "../video/service1.mp4";
import video2 from "../video/service2.mp4";
import video3 from "../video/service3.mp4";
import video4 from "../video/service4.mp4";

const videos = [
  {
    src: video1,
    text: "Swift. Mobile. Ready to <span>Respond</span>",
    icon: <i className="fa-solid fa-person-shelter"></i>, // Icon for video 1
  },
  {
    src: video2,
    text: "Eyes on What Matters, <span>24/7</span>",
    icon: <i className="fa-solid fa-eye"></i>, // Icon for video 2
  },
  {
    src: video3,
    text: "Trained. Reliable. Always on <span>Guard</span>",
    icon: <i className="fa-solid fa-shield-alt"></i>, // Icon for video 3
  },
  {
    src: video4,
    text: "Event Safety, Handled with <span>Precision</span>",
    icon: <i className="fa-solid fa-list-check"></i>, // Icon for video 4
  },
];

const VideoOverlay = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handleCircleClick = (index) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentVideoIndex(index);
  };

  return (
    <div className="video-carousel-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video"
          src={videos[currentVideoIndex].src}
          autoPlay
          muted
          onEnded={handleVideoEnd}
        ></video>
        <div className="video-overlay"></div>
        <div className="video-text">
          {/* Render the icon dynamically */}
          <div className="icon">{videos[currentVideoIndex].icon}</div>
          <p
            className="main-text"
            dangerouslySetInnerHTML={{
              __html: videos[currentVideoIndex].text,
            }}
          ></p>
          <p className="sub-text">https://britguarding.co.uk/</p>
        </div>
        <div className="carousel-S">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`carousel-circle ${
                index === currentVideoIndex ? "active" : ""
              }`}
              onClick={() => handleCircleClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;

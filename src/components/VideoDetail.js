import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Insert search keyword and press Enter to load...</h1>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

"use client";

import { ReceiptX } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsopen] = useState(true);

  const handleVideoPlayer = () => {
    setIsopen((prevState) => !prevState);
  };

  const option = {
    width: "250",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 text-text100">
        <button
          className="float-right hover:text-accent100 transition-all"
          onClick={handleVideoPlayer}>
          <ReceiptX size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          iframeClassName="rounded-lg"
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 bg-text100 text-bg200 px-3 py-1 rounded hover:bg-accent100 hover:text-text100 transition-all">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;

import React, { useRef, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  //const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(audioRef);


  const handlePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  const handlePause = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <audio ref={audioRef} controls onCanPlay={() => console.log("Audio can play")}>
        <source src={src} type="audio/mpeg" />
      </audio>

      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
  
};

export default AudioPlayer;

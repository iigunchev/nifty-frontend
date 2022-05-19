import { useEffect, useRef, useState } from 'react';

const useAudioControllers = (volume) => {
  // states
  const [duration, setDuration] = useState(0);
  // references
  const audioPlayer = useRef(); // reference the audio component
  const progressBar = useRef(); // reference the progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return [audioPlayer, progressBar, animationRef, duration];
};

export default useAudioControllers;

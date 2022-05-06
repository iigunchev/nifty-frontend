import React, { useEffect, useRef, useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// react audio player
import ReactAudioPlayer from 'react-audio-player';
// molecules
import PlayerControllers from '../../molecules/PlayerControllers/PlayerControllers';
import PlaybackBar from '../../molecules/PlaybackBar/PlaybackBar';
import TrackInfo from '../../molecules/TrackInfo/TrackInfo';
import './Player.scss';
import { setTrack } from '../../../redux/Audio/audioSlice';
import VolumeButton from '../../molecules/VolumeButton/VolumeButton';

function Player() {
  const audio = useSelector((state) => state.audio);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.currentTime = audio.track?.currentTime;
  }, [audio.track?.currentTime]);

  return (
    <section className="playerContainer">
      <ReactAudioPlayer
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
        onCanPlay={(element) => dispatch(setTrack(element.target))}
        ref={audioRef}
        src={audio.src}
        volume={audio.volume}
      />
      <div className="playerWrapper">
        <TrackInfo
          title="Motomami"
          artist="La Rosalia"
          songImage="https://via.placeholder.com/70x70"
        />
        <div className="controllersWrapper">
          <PlayerControllers
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <PlaybackBar
            time={audio.track?.currentTime}
            duration={audio.track?.duration}
          />
        </div>
        <VolumeButton track={audio.track} />
      </div>
    </section>
  );
}

export default Player;

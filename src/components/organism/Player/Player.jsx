import React, { useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// react audio player
import ReactAudioPlayer from 'react-audio-player';
// molecules
import PlayerControllers from '../../molecules/PlayerControllers/PlayerControllers';
import PlaybackBar from '../../molecules/PlaybackBar/PlaybackBar';
import TrackPlayer from '../../molecules/SongPlayer/SongPlayer';
import './Player.scss';
import { setTrack } from '../../../redux/Audio/audioSlice';

function Player() {
  const audio = useSelector((state) => state.audio);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  return (
    <section className="playerContainer">
      <ReactAudioPlayer
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
        onCanPlay={(element) => dispatch(setTrack(element.target))}
        src={audio.src}
        volume={audio.volume}
      />
      <PlaybackBar
        time={audio.track?.currentTime}
        duration={audio.track?.duration}
      />
      <div className="playerWrapper">
        <TrackPlayer
          title="Motomami"
          artist="La Rosalia"
          songImage="https://via.placeholder.com/50x50"
        />
        <PlayerControllers isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </section>
  );
}

export default Player;

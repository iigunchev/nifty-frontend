import React from 'react';
import { useDispatch } from 'react-redux';
import { setAudio } from '../../redux/Audio/audioSlice';
import TrendingTrackItem from '../../components/molecules/TrendingTrackItem/TrendingTrackItem';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <TrendingTrackItem />
      <button
        type="button"
        onClick={() => {
          dispatch(setAudio({ src: purpurina }));
        }}
      >
        Play
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setAudio({ src: canelita }));
        }}
      >
        Play
      </button>
    </div>
  );
}

export default Home;

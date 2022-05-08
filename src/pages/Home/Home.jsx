import React from 'react';
import { useDispatch } from 'react-redux';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';
import { setAudio } from '../../redux/Audio/audioSlice';

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
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

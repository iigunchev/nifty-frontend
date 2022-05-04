import React from 'react';
import { useDispatch } from 'react-redux';
import { setSrc } from '../../redux/Audio/audioSlice';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(setSrc(purpurina));
        }}
      >
        Play
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setSrc(canelita));
        }}
      >
        Play
      </button>
    </div>
  );
}

export default Home;

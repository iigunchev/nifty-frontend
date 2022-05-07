import React from 'react';
import { useDispatch } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { setAudio } from '../../redux/Audio/audioSlice';
import TrendingTrackItem from '../../components/molecules/TrendingTrackItem/TrendingTrackItem';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';
import useFetchTracks from '../../hooks/useFetchTracks';
// toast

function Home() {
  const dispatch = useDispatch();
  const [songs, isLoading] = useFetchTracks('track');
  return (
    <div>
      {!isLoading ? (
        songs.map((track) => (
          <TrendingTrackItem
            key={track._id}
            artistImg={track.thumbnail}
            artistName={track.artist}
            trackId={track._id}
            trackName={track.title}
            isLiked={track.isLiked}
          />
        ))
      ) : (
        <SkeletonTheme borderRadius={5}>
          <Skeleton count={15} height={50} />
        </SkeletonTheme>
      )}
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

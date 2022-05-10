import React from 'react';
import { useDispatch } from 'react-redux';
import { setAudio, setQueue } from '../../redux/Audio/audioSlice';
import TrendingTrackItem from '../../components/molecules/TrendingTrackItem/TrendingTrackItem';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';
import useFetchTracks from '../../hooks/useFetchTracks';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';

function Home() {
  const dispatch = useDispatch();
  const [songs, isLoading] = useFetchTracks('track');
  if (songs.length !== 0) {
    dispatch(
      setQueue(
        songs.map((track) => ({
          src: track.url,
          artist: track.artist,
          title: track.title,
          image: track.thumbnail
        }))
      )
    );
  }
  return (
    <div>
      <h2 className="heading2" style={{ marginBottom: '1em' }}>
        Trending tracks
      </h2>
      {!isLoading ? (
        songs.map((track) => (
          <TrendingTrackItem
            key={track._id}
            trackSrc={track.url}
            artistImg={track.thumbnail}
            artistName={track.artist}
            trackId={track._id}
            trackName={track.title}
            isLiked={track.isLiked}
          />
        ))
      ) : (
        <TrendingTrackItemSkeleton />
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

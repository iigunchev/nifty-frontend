import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { setAudio } from '../../redux/Audio/audioSlice';
import TrendingTrackItem from '../../components/molecules/TrendingTrackItem/TrendingTrackItem';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';
import { getTracks } from '../../utils/api/apiTrack';
import { useAuth } from '../../services/auth/auth';
// toast

function Home() {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState(null);

  const currentUser = useAuth();

  useEffect(() => {
    const fetch = async () => {
      try {
        const apiTracks = await getTracks('/track');
        setSongs(apiTracks);
      } catch (e) {
        toast.error('Failed to fetch tracks');
      }
    };
    if (!currentUser) {
      return;
    }
    fetch();
  }, [currentUser]);
  return (
    <div>
      {songs ? (
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

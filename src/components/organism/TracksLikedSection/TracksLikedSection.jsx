import React, { useEffect, useState } from 'react';
// skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// toast
import { toast } from 'react-toastify';
// components
import TrendingTrackItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
// styles
import './TracksLikedSection.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAuth } from '../../../services/auth/auth';
import { getTracks } from '../../../utils/api/apiTrack';

function TracksLikedSection() {
  const [likedTracks, setLikedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAuth();
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const apiTracks = await getTracks('/track/getLiked');
        setLikedTracks(apiTracks);
      } catch (e) {
        toast.error('Error fetching tracks');
      } finally {
        setIsLoading(false);
      }
    };
    if (!currentUser) return;
    fetch();
  }, [currentUser]);

  return (
    <section className="musicLikedContainer">
      <h1 className="heading1">Liked Songs</h1>
      {isLoading ? (
        <SkeletonTheme borderRadius={5}>
          <Skeleton count={15} height={50} />
        </SkeletonTheme>
      ) : (
        likedTracks.map((track) => (
          <TrendingTrackItem
            key={track._id}
            trackId={track._id}
            artistName={track.artist}
            trackName={track.title}
            artistImg={track.thumbnail}
            isLiked={track.likedBy[0]}
          />
        ))
      )}
    </section>
  );
}

export default TracksLikedSection;

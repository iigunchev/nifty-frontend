import React, { useEffect, useState } from 'react';
// skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// components
import TrendingTrackItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
// styles
import './TracksLiked.scss';
import 'react-loading-skeleton/dist/skeleton.css';

function TracksLiked() {
  const [likedTracks, setLikedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      setLikedTracks([1]);
    };
    fetch();
  }, []);

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
            key={track.id}
            title={track.title}
            description={track.description}
            image={track.image}
          />
        ))
      )}
    </section>
  );
}

export default TracksLiked;

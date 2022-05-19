import React from 'react';
// components
import TrendingTrackItemSkeleton from '../../molecules/Skeletons/TrendingTrackItemSkeleton';
// styles
import './LikedTracksSection.scss';
// custom hook
import useFetchItems from '../../../hooks/useFetchItems';
import TrendingList from '../TrendingList/TrendingList';

function LikedTracksSection() {
  const [songs, isLoading] = useFetchItems('track/getLiked');
  return (
    <section className="musicLikedContainer">
      <h1 className="heading1">Songs Liked</h1>
      {isLoading ? (
        <TrendingTrackItemSkeleton />
      ) : (
        <TrendingList
          errorMessage="You do not have liked songs!"
          tracks={songs}
        />
      )}
    </section>
  );
}

export default LikedTracksSection;

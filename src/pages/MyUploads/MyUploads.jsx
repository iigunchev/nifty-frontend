import React from 'react';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import useFetchItems from '../../hooks/useFetchItems';

function MyUploads() {
  const [songs, isLoading] = useFetchItems('track/byartist');
  return (
    <main>
      <h1 className="heading1">My Uploads</h1>
      {!isLoading ? (
        <TrendingList tracks={songs} />
      ) : (
        <TrendingTrackItemSkeleton />
      )}
    </main>
  );
}

export default MyUploads;

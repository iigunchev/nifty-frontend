import React from 'react';
import { useParams } from 'react-router-dom';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import useFetchItems from '../../hooks/useFetchItems';

function Genre() {
  // get playlist id and get playlist
  const { id } = useParams();
  const [songs, isLoading] = useFetchItems(`genres/tracks/${id}`);
  return (
    <div className="listWrapper">
      {!isLoading ? (
        <TrendingList tracks={songs} errorMessage="This list is empty" />
      ) : (
        <TrendingTrackItemSkeleton />
      )}
    </div>
  );
}

export default Genre;

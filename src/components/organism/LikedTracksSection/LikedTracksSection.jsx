/* eslint-disable no-unused-vars */
import React from 'react';
// skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// components
import TrendingTrackItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
// styles
import './LikedTracksSection.scss';

import useFetchTracks from '../../../hooks/useFetchTracks';
import TrendingTrackItemSkeleton from '../../molecules/Skeletons/TrendingTrackItemSkeleton';

function LikedTracksSection() {
  const [songs, isLoading] = useFetchTracks('track/getLiked');
  return (
    <section className="musicLikedContainer">
      <h1 className="heading1">Liked Songs</h1>
      {isLoading ? (
        <TrendingTrackItemSkeleton />
      ) : (
        songs.map((track) => (
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

export default LikedTracksSection;

import React from 'react';
// skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// components
import TrendingTrackItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
// styles
import './TracksLikedSection.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import useFetchTracks from '../../../hooks/useFetchTracks';

function TracksLikedSection() {
  const [songs, isLoading] = useFetchTracks('track/getLiked');
  return (
    <section className="musicLikedContainer">
      <h1 className="heading1">Liked Songs</h1>
      {isLoading ? (
        <SkeletonTheme borderRadius={5}>
          <Skeleton count={15} height={50} />
        </SkeletonTheme>
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

export default TracksLikedSection;

import React from 'react';
// link router dom
import { Link } from 'react-router-dom';
// components
import TrendingTrackItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
import TrendingTrackItemSkeleton from '../../molecules/Skeletons/TrendingTrackItemSkeleton';
// styles
import './LikedTracksSection.scss';
// custom hook
import useFetchTracks from '../../../hooks/useFetchTracks';

function LikedTracksSection() {
  const [songs, isLoading] = useFetchTracks('track/getLiked');
  return (
    <section className="musicLikedContainer">
      <h1 className="heading1">Songs Liked</h1>
      {isLoading ? <TrendingTrackItemSkeleton /> : <TrackList songs={songs} />}
    </section>
  );
}

function TrackList({ songs }) {
  return songs.length !== 0 ? (
    songs.map((track) => (
      <TrendingTrackItem
        key={track._id}
        trackSrc={track.url}
        artistImg={track.thumbnail}
        artistName={track.artist.firstName}
        trackId={track._id}
        trackName={track.title}
        isLiked={track.isLiked}
      />
    ))
  ) : (
    <h2>
      No songs liked, start to add songs <Link to="/app">here!</Link>
    </h2>
  );
}

export default LikedTracksSection;

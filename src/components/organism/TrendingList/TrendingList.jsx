import React from 'react';

// components
import TrendingItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
// styles
import './TrendingList.scss';

function TrendingList({ tracks }) {
  return (
    <div className="trendingListWrapper">
      {tracks.map((track) => (
        <TrendingItem
          key={track._id}
          trackSrc={track.url}
          artistImg={track.thumbnail}
          artistName={track.artist}
          trackId={track._id}
          trackName={track.title}
          isLiked={track.isLiked}
        />
      ))}
    </div>
  );
}

export default TrendingList;

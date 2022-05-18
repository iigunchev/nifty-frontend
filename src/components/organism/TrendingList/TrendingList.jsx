import React from 'react';

// components
import TrendingItem from '../../molecules/TrendingTrackItem/TrendingTrackItem';
// default img
import defaultImg from '../../../assets/img/defaultSong.png';
// styles
import './TrendingList.scss';

function TrendingList({
  tracks,
  errorMessage = 'Tracks is empty',
  handleListState
}) {
  if (tracks.length === 0) {
    return <h3 className="heading3">{errorMessage}</h3>;
  }
  return (
    <div className="trendingListWrapper">
      {tracks.map((track) => (
        <TrendingItem
          key={track._id}
          trackSrc={track.url}
          artistImg={track.thumbnail || defaultImg}
          artistName={track.artist.artisticName}
          trackId={track._id}
          trackName={track.title}
          isLiked={track.isLiked}
          trackGenre={track.genre.name}
          handleListState={handleListState}
        />
      ))}
    </div>
  );
}

export default TrendingList;

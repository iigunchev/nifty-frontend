import React from 'react';

// components
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';

import './ArtistList.scss';

function ArtistList({ artists }) {
  if (artists.length === 0) {
    return <h1>There&apos;s no artists</h1>;
  }
  return (
    <div className="trendingListWrapper">
      {artists.map((artist) => (
        <TrendingItem
          key={artist._id}
          image={artist.profileImage}
          title={artist.firstName}
          // followers
        />
      ))}
    </div>
  );
}

export default ArtistList;

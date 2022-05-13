import React from 'react';

// components
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';

import './ArtistList.scss';

function ArtistList({ artists }) {
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

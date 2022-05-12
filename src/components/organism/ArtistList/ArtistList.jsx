import React from 'react';

// components
// import TrendingArtists from '../../molecules/TrendingArtists/TrendingArtists';
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';

function ArtistList({ artists }) {
  console.log(artists);
  return (
    <div className="">
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

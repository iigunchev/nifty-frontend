import React from 'react';

// components
import TrendingArtists from '../../molecules/TrendingArtists/TrendingArtists';

function ArtistList({ artists }) {
  return (
    <div className="">
      {artists.map((artist) => (
        <TrendingArtists
          key={artist._id}
          artistImg={artist.image}
          artistName={artist.firstName}
        />
      ))}
    </div>
  );
}

export default ArtistList;

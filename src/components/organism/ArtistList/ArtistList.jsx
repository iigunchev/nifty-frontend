import React from 'react';

import ArtistItem from '../../molecules/ArtistItem/ArtistItem';

// components

import './ArtistList.scss';

function ArtistList({ artists, avatarWidth }) {
  if (artists.length === 0) {
    return <h1>There&apos;s no artists</h1>;
  }
  return (
    <div className="artistListWrapper">
      {artists.map((artist) => (
        <ArtistItem
          key={artist._id}
          id={artist._id}
          image={artist.profileImage}
          name={artist.artisticName || artist.firstName}
          avatarWidth={avatarWidth}
        />
      ))}
    </div>
  );
}

export default ArtistList;

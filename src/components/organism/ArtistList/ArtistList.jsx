import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP } from '../../../routes/routes';

// components
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';

import './ArtistList.scss';

function ArtistList({ artists }) {
  const navigate = useNavigate();
  const navigateArtist = (id) => navigate(`${APP}/artist/${id}`);
  if (artists.length === 0) {
    return <h1>There&apos;s no artists</h1>;
  }
  return (
    <div className="trendingListWrapper">
      {artists.map((artist) => (
        <TrendingItem
          key={artist._id}
          id={artist._id}
          image={artist.profileImage}
          title={artist.firstName}
          followers={artist.followers}
          handleClick={navigateArtist}
        />
      ))}
    </div>
  );
}

export default ArtistList;

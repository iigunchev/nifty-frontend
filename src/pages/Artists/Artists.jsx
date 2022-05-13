import React from 'react';

import ArtistList from '../../components/organism/ArtistList/ArtistList';
import useFetchItems from '../../hooks/useFetchItems';
import './Artists.scss';

function Artists() {
  const [artists, isLoadingArtists] = useFetchItems('account/byartist');

  return (
    <main>
      <h1 className="heading1">Artists</h1>
      <div className="genresContainer">
        {!isLoadingArtists ? (
          <ArtistList artists={artists} />
        ) : (
          <div>ERROR</div>
        )}
      </div>
    </main>
  );
}

export default Artists;

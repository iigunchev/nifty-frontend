import React from 'react';

import useFetchArtist from '../../hooks/useFetchArtist';

import ArtistList from '../../components/organism/ArtistList/ArtistList';
import './Artists.scss';

function Artists() {
  const [artists, isLoadingArtists] = useFetchArtist('account/byartist');

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

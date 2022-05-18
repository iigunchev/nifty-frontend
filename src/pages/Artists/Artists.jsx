import React from 'react';

import './Artists.scss';
import useFetchItems from '../../hooks/useFetchItems';
import ArtistList from '../../components/organism/ArtistList/ArtistList';

function Artists() {
  const [artists, isLoadingArtists] = useFetchItems('account/byartist');
  console.log(artists);

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

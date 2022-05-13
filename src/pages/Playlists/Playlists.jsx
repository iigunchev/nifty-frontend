import React from 'react';

import useFetchItems from '../../hooks/useFetchItems';
import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';

function Playlists() {
  const [playlists, isLoadingPlaylists] = useFetchItems('playlist');

  return (
    <main>
      <h1 className="heading1">Playlists</h1>
      <div className="genresContainer">
        {!isLoadingPlaylists ? (
          <PlaylistsList playlists={playlists} />
        ) : (
          <div>ERROR</div>
        )}
      </div>
    </main>
  );
}

export default Playlists;

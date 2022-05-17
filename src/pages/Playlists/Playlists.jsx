import React from 'react';

import useFetchItems from '../../hooks/useFetchItems';
import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';
import CardSkeleton from '../../components/molecules/Skeletons/CardSkeleton';

function Playlists() {
  const [playlists, isLoadingPlaylists] = useFetchItems('playlist');

  return (
    <main style={{ padding: '1.5em' }}>
      <h1 className="heading1">Playlists</h1>
      <div className="genresContainer">
        {!isLoadingPlaylists ? (
          <PlaylistsList playlists={playlists} />
        ) : (
          <CardSkeleton />
        )}
      </div>
    </main>
  );
}

export default Playlists;

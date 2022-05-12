import React from 'react';
import './MyPlaylistSection.scss';
// utils
import useFetchItems from '../../../hooks/useFetchItems';
import PlaylistMap from '../PlaylistMap/PlaylistMap';

function MyPlaylistSection() {
  const [playlists, isLoading] = useFetchItems('playlist/byuser');
  return (
    <section className="myPlaylistWrapper">
      {isLoading ? (
        <h3>You don&apos;t have any playlist created, start here</h3>
      ) : (
        <PlaylistMap playlists={playlists} />
      )}
    </section>
  );
}

export default MyPlaylistSection;

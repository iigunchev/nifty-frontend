import React from 'react';
import PlaylistItem from '../../molecules/PlaylistItem/PlaylistItem';

function PlaylistsList({ playlists }) {
  if (playlists.length === 0) {
    return <h3>You don&apos;t have any playlist created, start here</h3>;
  }

  return playlists.map((playlist) => (
    <PlaylistItem
      key={playlist._id}
      id={playlist._id}
      name={playlist.name}
      tracksLength={playlist.tracks}
      image={playlist.thumbnail}
    />
  ));
}

export default PlaylistsList;

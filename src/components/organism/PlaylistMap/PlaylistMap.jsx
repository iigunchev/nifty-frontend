import React from 'react';
import PlaylistItem from '../../molecules/PlaylistItem/PlaylistItem';

function PlaylistMap({ playlists }) {
  return playlists.map((playlist) => (
    <PlaylistItem
      key={playlist._id}
      name={playlist.name}
      tracksLength={playlist.tracks}
      image={playlist.thumbnail}
    />
  ));
}

export default PlaylistMap;

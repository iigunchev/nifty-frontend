import React from 'react';
import './MyPlaylistSection.scss';

function MyPlaylistSection() {
  const playlists = [];
  return (
    <section className="myPlaylistWrapper">
      {playlists.length === 0 ? (
        <h3>You don&apos;t have any playlist created, start here</h3>
      ) : (
        <h4>Playlists</h4>
      )}
    </section>
  );
}

export default MyPlaylistSection;

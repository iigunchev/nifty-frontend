import React from 'react';
import CreatePlaylistForm from '../../components/organism/CreatePlaylistForm/CreatePlaylistForm';
import MyPlaylistSection from '../../components/organism/MyPlaylistSection/MyPlaylistSection';

function MyPlaylists() {
  return (
    <>
      <h1 className="heading1">Your own playlists!</h1>
      <MyPlaylistSection />
      <CreatePlaylistForm />
    </>
  );
}

export default MyPlaylists;

import React from 'react';
import CreatePlaylistForm from '../../components/organism/CreatePlaylistForm/CreatePlaylistForm';
import MyPlaylistSection from '../../components/organism/MyPlaylistSection/MyPlaylistSection';
// styles
import './MyPlaylists.scss';

function MyPlaylists() {
  return (
    <>
      <div className="playlistHeadingWrapper">
        <h1 className="heading1">Your playlists!</h1>
        <CreatePlaylistForm />
      </div>
      <MyPlaylistSection />
    </>
  );
}

export default MyPlaylists;

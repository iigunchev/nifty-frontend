import React from 'react';
import CreatePlaylistForm from '../../components/organism/CreatePlaylistForm/CreatePlaylistForm';
import MyPlaylistSection from '../../components/organism/MyPlaylistSection/MyPlaylistSection';
import useFetchItems from '../../hooks/useFetchItems';

function MyPlaylists() {
  const [playlists, isLoading] = useFetchItems('playlist/byuser');
  return (
    <>
      <h1 className="heading1">Your playlists!</h1>
      <MyPlaylistSection playlists={playlists} />
      <CreatePlaylistForm />
    </>
  );
}

export default MyPlaylists;

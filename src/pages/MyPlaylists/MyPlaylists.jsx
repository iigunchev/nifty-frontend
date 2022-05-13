import React from 'react';
import CardSkeleton from '../../components/molecules/Skeletons/CardSkeleton';
// component
import CreatePlaylistForm from '../../components/organism/CreatePlaylistForm/CreatePlaylistForm';
import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';
// custom hook
import useFetchItems from '../../hooks/useFetchItems';
// styles
import './MyPlaylists.scss';

function MyPlaylists() {
  const [playlists, isLoading, setPlaylists] = useFetchItems('playlist/byuser');
  return (
    <>
      <div className="playlistHeadingWrapper">
        <h1 className="heading1">Your playlists!</h1>
        <CreatePlaylistForm playlists={playlists} setPlaylists={setPlaylists} />
      </div>
      <section className="myPlaylistWrapper">
        {isLoading ? <CardSkeleton /> : <PlaylistsList playlists={playlists} />}
      </section>
    </>
  );
}

export default MyPlaylists;

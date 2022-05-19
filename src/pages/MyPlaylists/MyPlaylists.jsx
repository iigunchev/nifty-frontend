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
  const [playlistsFollowed, isLoadingFollowedPlaylists] =
    useFetchItems('playlist/followed');
  return (
    <>
      <div className="playlistHeadingWrapper">
        <h1 className="heading1">Your playlists!</h1>
        <CreatePlaylistForm playlists={playlists} setPlaylists={setPlaylists} />
      </div>
      <section className="myPlaylistWrapper">
        {isLoading && isLoadingFollowedPlaylists ? (
          <CardSkeleton />
        ) : (
          <>
            <PlaylistsList playlists={playlists} />
            <h1 className="heading1">Followed playlist</h1>
            <PlaylistsList
              message="you do not follow any playlists"
              playlists={playlistsFollowed}
            />
          </>
        )}
      </section>
    </>
  );
}

export default MyPlaylists;

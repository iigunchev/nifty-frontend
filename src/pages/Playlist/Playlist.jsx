import React from 'react';
// hooks
import { useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';
// components
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
// import TrendingList from '../../components/organism/TrendingList/TrendingList';
// icons
import defaultPlaylist from '../../assets/img/defaultSong.png';
// styles
import './Playlist.scss';

function Playlist() {
  const { id } = useParams();
  const [playlist, isLoading] = useFetchItems(`playlist/${id}`);
  console.log(playlist);
  return (
    <section className="playlistSectionContainer">
      <header className="playlistHeader">
        <img src={playlist.thumbnail || defaultPlaylist} alt="playlist" />

        <div className="playlistInfoWrapper">
          <p>{playlist.description}</p>
          <h1 className="heading1 playlistName">{playlist.name}</h1>
        </div>
      </header>

      {!isLoading ? <TrendingTrackItemSkeleton /> : null}
      {/* <TrendingList
          errorMessage="This playlist do not have tracks"
          tracks={playlist.tracks}
        /> */}
    </section>
  );
}

export default Playlist;

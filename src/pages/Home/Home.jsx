import React from 'react';
import { Link } from 'react-router-dom';
import * as route from '../../routes';

import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';

// import TrendingItem from '../../components/molecules/TrendingItem/TrendingItem';

import useFetchItems from '../../hooks/useFetchItems';

import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import './Home.scss';
import ArtistList from '../../components/organism/ArtistList/ArtistList';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import TrendingItemSkeleton from '../../components/molecules/Skeletons/TrendingItemSkeleton';

function Home() {
  const [songs, isLoading] = useFetchItems('track');
  const [artists, isLoadingArtists] = useFetchItems('account/byartist');
  const [playlists, isLoadingPlaylists] = useFetchItems('playlist');

  return (
    <main className="homeContainer">
      <div className="homeLeftCol">
        <section className="trendingPlaylistsContainer">
          <div className="LinkHeader">
            <h2>Top PlayList</h2>
            <span className="seemoreLink">
              <Link to={`${route.APP}${route.PLAYLISTS}`}>See more</Link>
            </span>
          </div>
          <section className="PlayListSection">
            {!isLoadingPlaylists ? (
              <PlaylistsList playlists={playlists} />
            ) : (
              <TrendingItemSkeleton />
            )}
          </section>
        </section>
        <div className="trendingWrapper">
          <section className="trendingTracksContainer">
            <h2>Top Tracks</h2>
            {!isLoading ? (
              <TrendingList tracks={songs} />
            ) : (
              <TrendingTrackItemSkeleton />
            )}
          </section>
          <section className="trendingArtistsContainer">
            <h2>Top Artists</h2>
            {!isLoadingArtists ? (
              <ArtistList artists={artists} />
            ) : (
              <TrendingItemSkeleton />
            )}
          </section>
        </div>
      </div>
      <div className="homeRightCol">hola3</div>

      {/* <section className="header">
        <h1>HOME</h1>
        <form>
          <div>
            <input type="search" id="mySearch" name="q" />
            <button type="submit">Search</button>
          </div>
        </form>
      </section>
      <section className="mainsectionwrapper">
        <div className="leftsection">
          <div className="titeles">
            <h2>PlayList</h2>
            <span className="seemoreLink">
              <Link to={`${route.APP}${route.PLAYLISTS}`}>See more</Link>
            </span>
          </div>
          <section className="PlayListSection">
            <PlaylistItem />
          </section>
          <div className="titeles">
            <h2>Trending</h2>
            <span className="seemoreLink">
              <Link to={`${route.APP}${route.POPULAR}`}>See more</Link>
            </span>
          </div>
          <section className="TrendingSection">
          </section>
        </div>


      </section> */}
    </main>
  );
}

export default Home;

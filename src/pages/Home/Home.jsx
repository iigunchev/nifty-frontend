import React from 'react';
import { Link } from 'react-router-dom';
import * as route from '../../routes';
import PlaylistItem from '../../components/molecules/PlaylistItem/PlaylistItem';

// import TrendingItem from '../../components/molecules/TrendingItem/TrendingItem';

import useFetchItems from '../../hooks/useFetchItems';

import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import './Home.scss';
import ArtistList from '../../components/organism/ArtistList/ArtistList';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import useFetchArtist from '../../hooks/useFetchArtist';

function Home() {
  const [songs, isLoading] = useFetchItems('track');

  const [artists, isLoadingArtists] = useFetchArtist('account/byartist');

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
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
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
              <div>ERROR</div>
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

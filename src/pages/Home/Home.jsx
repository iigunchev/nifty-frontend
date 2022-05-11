import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as route from '../../routes';
import { setQueue } from '../../redux/Audio/audioSlice';
import PlaylistItem from '../../components/molecules/PlaylistItem/PlaylistItem';

// import TrendingItem from '../../components/molecules/TrendingItem/TrendingItem';

import useFetchTracks from '../../hooks/useFetchTracks';

import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import './Home.scss';
import TrendingItem from '../../components/molecules/TrendingItem/TrendingItem';
import TrendingList from '../../components/organism/TrendingList/TrendingList';

function Home() {
  const dispatch = useDispatch();
  const [songs, isLoading] = useFetchTracks('track');
  if (songs.length !== 0) {
    dispatch(
      setQueue(
        songs.map((track) => ({
          src: track.url,
          artist: track.artist,
          title: track.title,
          image: track.thumbnail
        }))
      )
    );
  }
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
            <TrendingItem />
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

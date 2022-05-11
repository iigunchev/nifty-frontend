import React from 'react';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { setAudio } from '../../redux/Audio/audioSlice';
import * as route from '../../routes';
=======
import { setAudio, setQueue } from '../../redux/Audio/audioSlice';
>>>>>>> 4c264ab05be1b3957a1bd4e9df24ebbb9a58fec3
import TrendingTrackItem from '../../components/molecules/TrendingTrackItem/TrendingTrackItem';
import PlaylistItem from '../../components/molecules/PlaylistItem/PlaylistItem';
// import TrendingItem from '../../components/molecules/TrendingItem/TrendingItem';
// song
import purpurina from '../../assets/songsTest/purpurina.mp3';
import canelita from '../../assets/songsTest/canelita.mp3';
import useFetchTracks from '../../hooks/useFetchTracks';

import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import './Home.scss';

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
    <div>
      <section className="header">
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
            {!isLoading ? (
              songs.map((track) => (
                <TrendingTrackItem
            key={track._id}
            trackSrc={track.url}
            artistImg={track.thumbnail}
            artistName={track.artist}
            trackId={track._id}
            trackName={track.title}
            isLiked={track.isLiked}
          />
              ))
            ) : (
              <TrendingTrackItemSkeleton />
            )}
          </section>
        </div>
        <div className="rightsection">
          <button
            type="button"
            onClick={() => {
              dispatch(setAudio({ src: purpurina }));
            }}
          >
            Play
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(setAudio({ src: canelita }));
            }}
          >
            Play
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

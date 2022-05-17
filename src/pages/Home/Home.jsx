import React from 'react';

import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';

// import TrendingItem from '../../components/molecules/TrendingItem/TrendingItem';

import useFetchItems from '../../hooks/useFetchItems';

import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import './Home.scss';
import ArtistList from '../../components/organism/ArtistList/ArtistList';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import TrendingItemSkeleton from '../../components/molecules/Skeletons/TrendingItemSkeleton';
// banner image
import chatBanner from '../../assets/img/chatBanner.png';

function Home() {
  const [songs, isLoading] = useFetchItems('track');
  const [artists, isLoadingArtists] = useFetchItems('account/byartist');
  const [playlists, isLoadingPlaylists] = useFetchItems('playlist');

  return (
    <main className="homeContainer">
      <section className="trendingPlaylistsContainer">
        <div className="LinkHeader">
          <h2 className="heading2">Top PlayList</h2>
        </div>
        <section className="PlayListSection">
          {!isLoadingPlaylists ? (
            <PlaylistsList playlists={playlists} />
          ) : (
            <TrendingItemSkeleton />
          )}
        </section>
      </section>
      <section className="homeBottomCol">
        <div className="trendingWrapper">
          <section className="trendingTracksContainer">
            <h2 className="heading2">Top Tracks</h2>
            {!isLoading ? (
              <TrendingList tracks={songs} />
            ) : (
              <TrendingTrackItemSkeleton />
            )}
          </section>
          <section className="trendingArtistsContainer">
            <h2 className="heading2">Top Artists</h2>
            {!isLoadingArtists ? (
              <ArtistList artists={artists} />
            ) : (
              <TrendingItemSkeleton />
            )}
          </section>
        </div>
        <div className="chatSection">
          <div className="bannerTitle">
            <h2>Chat with your friends</h2>
          </div>
          <div className="bannerDescription">
            <p>
              You can follow your friends and see what they&apos;re listening!
            </p>
            <p>Coming soong...</p>
            <img className="bannerImg" src={chatBanner} alt="banner chat" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

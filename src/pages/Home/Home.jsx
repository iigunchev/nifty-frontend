import React from 'react';
// Carousel playlist
import AliceCarousel from 'react-alice-carousel';
// components
import PlaylistItem from '../../components/molecules/PlaylistItem/PlaylistItem';
// custom hook
import useFetchItems from '../../hooks/useFetchItems';

import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
// styles
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './Home.scss';
// components
import ArtistList from '../../components/organism/ArtistList/ArtistList';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import TrendingItemSkeleton from '../../components/molecules/Skeletons/TrendingItemSkeleton';
// banner image
import chatBanner from '../../assets/img/chatBanner.png';

function Home() {
  const [songs, isLoading] = useFetchItems('track');
  const [artists, isLoadingArtists] = useFetchItems('account/byartist');
  const [playlists, isLoadingPlaylists] = useFetchItems('playlist');

  const responsiveCarousel = {
    0: { items: 2 },
    568: { items: 3 },
    900: { items: 4 },
    1024: { items: 4 },
    1500: { items: 5 }
  };

  const CarouselItems = () =>
    playlists.map((playlist) => (
      <div
        key={playlist._id}
        style={{ marginRight: 24 }}
        className="carouselWrapper"
      >
        <PlaylistItem
          id={playlist._id}
          name={playlist.name}
          tracks={playlist.tracks}
          image={playlist.thumbnail}
        />
      </div>
    ));
  return (
    <main className="homeContainer">
      <section className="trendingPlaylistsContainer">
        <div className="LinkHeader">
          <h2 className="heading2">Top PlayList</h2>
        </div>

        {!isLoadingPlaylists ? (
          <AliceCarousel
            disableButtonsControls
            autoPlay
            autoPlayInterval={2500}
            mouseTracking
            responsive={responsiveCarousel}
            infinite
            items={CarouselItems()}
            controlsStrategy="alternate"
          />
        ) : (
          <TrendingItemSkeleton />
        )}
      </section>
      <section className="homeBottomCol">
        <section className="trendingTracksContainer">
          <h2 className="heading2">Top Tracks</h2>
          {!isLoading ? (
            <TrendingList tracks={songs?.slice(0, 5)} />
          ) : (
            <TrendingTrackItemSkeleton />
          )}
        </section>
        <section className="trendingArtistsContainer">
          <h2 className="heading2">Top Artists</h2>
          {!isLoadingArtists ? (
            <ArtistList artists={artists?.slice(0, 5)} />
          ) : (
            <TrendingItemSkeleton />
          )}
        </section>
        <div className="chatSection">
          <div className="bannerTitle">
            <h2>Chat with your friends</h2>
          </div>
          <div className="bannerDescription">
            <p>
              You can follow your friends and see what they&apos;re listening!
            </p>
            <p>Coming soon...</p>
            <img className="bannerImg" src={chatBanner} alt="banner chat" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

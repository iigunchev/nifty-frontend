import React from 'react';
// Carousel playlist
import AliceCarousel from 'react-alice-carousel';
// router
import { Link } from 'react-router-dom';
// components
import PlaylistItem from '../../components/molecules/PlaylistItem/PlaylistItem';
// custom hook
import useFetchItems from '../../hooks/useFetchItems';
import CardSkeleton from '../../components/molecules/Skeletons/CardSkeleton';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
// styles
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './Home.scss';
// components
import ArtistList from '../../components/organism/ArtistList/ArtistList';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import TrendingItemSkeleton from '../../components/molecules/Skeletons/TrendingItemSkeleton';

function Home() {
  const [popularTracks, isLoading] = useFetchItems('track/popular');
  const [artists, isLoadingArtists] = useFetchItems('account/popular');
  const [likedSongs, isLoadingLikedSongs] = useFetchItems(`track/getLiked`);
  const [playlists, isLoadingPlaylists] = useFetchItems('playlist/popular');

  const responsiveCarousel = {
    0: { items: 2 },
    568: { items: 3 },
    900: { items: 4 },
    1024: { items: 4 },
    1500: { items: 5 }
  };

  const CarouselItems = () =>
    playlists.slice(0, 10).map((playlist) => (
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
          <div className="skeletonFlexRow">
            <CardSkeleton />
          </div>
        )}
      </section>
      <section className="homeBottomCol">
        <article className="homeTrendingTracksContainer">
          <h2 className="heading2">Top Tracks</h2>
          {!isLoading ? (
            <TrendingList tracks={popularTracks.slice(0, 5)} />
          ) : (
            <TrendingTrackItemSkeleton />
          )}
        </article>
        <article className="homeLikedSongsContainer">
          <h2 className="heading2">Liked Songs</h2>
          {isLoadingLikedSongs ? (
            <TrendingTrackItemSkeleton />
          ) : (
            <TrendingList
              errorMessage="You do not have liked songs!"
              tracks={likedSongs.slice(0, 5)}
            />
          )}
        </article>
        <article className="homeTrendingArtistsContainer">
          <span className="trendingHeader">
            <h2 className="heading2">Top Artists</h2>
            <Link to="/app/artists">See more...</Link>
          </span>
          {!isLoadingArtists ? (
            <ArtistList avatarWidth={120} artists={artists.slice(0, 10)} />
          ) : (
            <TrendingItemSkeleton />
          )}
        </article>
      </section>
    </main>
  );
}

export default Home;

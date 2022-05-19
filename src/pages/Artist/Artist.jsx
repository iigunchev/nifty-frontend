import React from 'react';
import './Artist.scss';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';

import TrendingList from '../../components/organism/TrendingList/TrendingList';

import Button from '../../components/molecules/Button/Button';

import follow from '../../utils/api/apiFollow';
import handleAuthErrors from '../../utils/handleAuthErrors';
import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';
import TrendingItemSkeleton from '../../components/molecules/Skeletons/TrendingItemSkeleton';
import IconFollow from '../../assets/img/users-avatar.png';
import CardSkeleton from '../../components/molecules/Skeletons/CardSkeleton';

function Artist() {
  const { id } = useParams();
  const [artist, isLoadingArtist, setArtist] = useFetchItems(`account/${id}`);
  const [songs, isLoadingSongs] = useFetchItems(`track/byartist/${id}`);
  const [playlists, isLoadingPlaylists] = useFetchItems(
    `playlist/byuser/${id}`
  );

  const handleFollowUser = async () => {
    try {
      await follow(artist._id, !artist.isFollowed);
      setArtist({ ...artist, isFollowed: !artist.isFollowed });
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
    }
  };

  return (
    <section className="artistSectionContainer">
      <header className="artistHeader">
        {!isLoadingArtist ? (
          <div className="artistImageContainer">
            {artist.profileImage ? (
              <img src={artist.profileImage} alt="artistImg" className="" />
            ) : (
              <img
                src=" https://images.unsplash.com/photo-1575285113814-f770cb8c796e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
                alt="artistImg"
                className=""
              />
            )}
          </div>
        ) : (
          <CardSkeleton count={1} />
        )}
        <div className="artistInfo">
          <h1 className="artistName">{artist.artisticName}</h1>
          <div className="WrapperFollow">
            <img src={IconFollow} alt="iconfollow" />
            <p>Followers {artist.followers}</p>
          </div>
          <Button className="ButtonFollow" handleClick={handleFollowUser}>
            {artist.isFollowed ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </header>
      <section className="trendingTracksContainer">
        <h2 className="heading2">Tracks</h2>
        {!isLoadingSongs ? <TrendingList tracks={songs} /> : <div>ERROR</div>}
      </section>
      <h2 className="heading2">Playlists</h2>
      <section className="trendingPlaylistContainer">
        {!isLoadingPlaylists ? (
          <PlaylistsList playlists={playlists} />
        ) : (
          <TrendingItemSkeleton />
        )}
      </section>
    </section>
  );
}

export default Artist;

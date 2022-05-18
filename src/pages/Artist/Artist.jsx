import React, { useState } from 'react';
import './Artist.scss';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';
// import Button from '../../components/molecules/Button/Button';
import FollowButton from '../../components/molecules/FollowButton/FollowButton';
import TrendingList from '../../components/organism/TrendingList/TrendingList';

import follow from '../../utils/api/apiFollow';
import handleAuthErrors from '../../utils/handleAuthErrors';
import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';
import TrendingItemSkeleton from '../../components/molecules/Skeletons/TrendingItemSkeleton';

function Artist() {
  const { id } = useParams();
  const [artist, isLoading3] = useFetchItems(`account/${id}`);
  const [songs, isLoadingSongs] = useFetchItems(`track/byartist/${id}`);
  const [playlists, isLoadingPlaylists] = useFetchItems(
    `playlist/byuser/${id}`
  );
  const userId = useSelector((state) => state.user.id);
  console.log(artist);
  const [isLoading, setIsLoading] = useState(false);
  const [isArtistFollow, setIsArtistFollow] = useState();

  const followers = artist.followedBy?.length;

  const handleFollowUser = async (followValue) => {
    setIsLoading(true);
    setIsArtistFollow(!isArtistFollow);
    try {
      await follow(followValue, id);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(isLoading3);

  return (
    <div className="">
      <section className="artistSectionContainer">
        <div className="artistImageContainer">
          <img src={artist.profileImage} alt="artist" />
        </div>
        <div className="artistdiv">
          <h1 className="">{artist.artisticName}</h1>
          <p>{artist.followers}</p>
          {/* {!followers ? <p>Followers {followers}</p> : null} */}

          <p>Followers {followers}</p>
          <FollowButton
            disabled={isLoading}
            handleFollow={handleFollowUser}
            isFollowing={artist?.followedBy?.includes(userId)}
          />
        </div>
      </section>
      <section className="trendingTracksContainer">
        <h2 className="heading2">Tracks</h2>
        {!isLoadingSongs ? <TrendingList tracks={songs} /> : <div>ERROR</div>}
      </section>
      {!isLoadingPlaylists ? (
        <PlaylistsList playlists={playlists} />
      ) : (
        <TrendingItemSkeleton />
      )}
      <h2>hola</h2>
    </div>
  );
}

export default Artist;

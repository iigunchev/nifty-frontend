import React, { useState } from 'react';
// toast
import { toast } from 'react-toastify';
// redux
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../../redux/Audio/audioSlice';
// components
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import TrendingItem from '../TrendingItem/TrendingItem';
import LikeButton from '../LikeButton/LikeButton';
// icons
import { ReactComponent as SVG } from '../../../assets/svg/verticalDots.svg';
// utils
import { toggleLike } from '../../../utils/api/apiTrack';
import handleAuthErrors from '../../../utils/handleAuthErrors';
// styles
import './TrendingTrackItem.scss';

function TrendingTrackItem({
  artistImg,
  trackSrc,
  trackName,
  artistName,
  trackId,
  isLiked
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handlePlayTrack = () => {
    dispatch(
      setCurrentTrack({
        artist: artistName,
        src: trackSrc,
        title: trackName,
        image: artistImg
      })
    );
  };
  const handleLikeTrack = async (likeValue) => {
    setIsLoading(true);
    try {
      await toggleLike(likeValue, trackId);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="trendingTrackItemContainer">
      <LikeButton
        disabled={isLoading}
        handleLike={handleLikeTrack}
        liked={isLiked}
      />
      {/* <span className="trendingSpot">{spot}</span> */}
      <TrendingItem
        image={artistImg}
        title={trackName}
        description={artistName}
      />
      {/* <span>{trackDuration}</span> */}
      <ButtonWithIcon handleClick={handlePlayTrack} />
      <button
        type="button"
        onClick={() => setShowDialog(!showDialog)}
        title="More options"
      >
        <SVG className="verticalDots" />
      </button>
    </div>
  );
}

export default TrendingTrackItem;

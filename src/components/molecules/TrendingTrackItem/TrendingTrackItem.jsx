import React, { useState } from 'react';
// toast
import { toast } from 'react-toastify';
// redux
import { useDispatch } from 'react-redux';
import {
  removeQueue,
  setCurrentTrack,
  setTrackToQueue
} from '../../../redux/Audio/audioSlice';
// components
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import TrendingItem from '../TrendingItem/TrendingItem';
import LikeButton from '../LikeButton/LikeButton';
import DialogInformation from '../DialogInformation/DialogInformation';
// icons
import { ReactComponent as SVG } from '../../../assets/svg/verticalDots.svg';
// utils
import { toggleLike } from '../../../utils/api/apiTrack';
import handleAuthErrors from '../../../utils/handleAuthErrors';
// styles
import './TrendingTrackItem.scss';
import { openModal, setTrack } from '../../../redux/Dialog/dialogSlice';

function TrendingTrackItem({
  artistImg,
  trackSrc,
  trackName,
  artistName,
  trackGenre,
  trackId,
  isLiked
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTrackLiked, setIsTrackLiked] = useState(isLiked);
  // on blur id
  let timeOutId;
  const dispatch = useDispatch();
  // play track
  const handlePlayTrack = () => {
    dispatch(removeQueue());
    dispatch(
      setCurrentTrack({
        artist: artistName,
        src: trackSrc,
        title: trackName,
        image: artistImg
      })
    );
  };
  const onBlurHandler = () => {
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    timeOutId = setTimeout(() => {
      setShowDialog(false);
    });
  };

  const onFocusHandler = () => {
    // If a child receives focus, do not close the popover.
    clearTimeout(timeOutId);
  };

  const handleLikeTrack = async (likeValue) => {
    setShowDialog(false);
    setIsLoading(true);
    setIsTrackLiked(!isTrackLiked);
    try {
      await toggleLike(likeValue, trackId);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToQueue = () => {
    setShowDialog(false);
    dispatch(
      setTrackToQueue({
        src: trackSrc,
        artist: artistName,
        title: trackName,
        image: artistImg
      })
    );
    toast.success('track added to queue 💿');
  };
  const handleDeleteTrack = () => {
    dispatch(openModal());
    dispatch(setTrack({ id: trackId, src: trackSrc, action: 'delete' }));
  };
  const handleEditTrack = () => {
    dispatch(
      setTrack({
        id: trackId,
        src: trackSrc,
        action: 'edit',
        name: trackName,
        img: artistImg,
        genre: trackGenre
      })
    );
    dispatch(openModal());
  };

  return (
    <div className="trendingTrackItemContainer">
      <LikeButton
        disabled={isLoading}
        handleLike={handleLikeTrack}
        isLiked={isTrackLiked}
      />
      <TrendingItem
        image={artistImg}
        title={trackName}
        description={artistName}
        handleClick={handlePlayTrack}
      />
      <ButtonWithIcon trackSrc={trackSrc} handlePlayTrack={handlePlayTrack} />
      <div
        onFocus={onFocusHandler}
        className="dialogWrapper"
        onBlur={onBlurHandler}
      >
        <button
          type="button"
          onClick={() => setShowDialog(!showDialog)}
          title="More options"
        >
          <SVG className="verticalDots" />
        </button>

        {showDialog ? (
          <DialogInformation
            handleLike={handleLikeTrack}
            isLiked={isTrackLiked}
            handleAddToQueue={handleAddToQueue}
            handleEditTrack={handleEditTrack}
            handleDeleteTrack={handleDeleteTrack}
          />
        ) : null}
      </div>
    </div>
  );
}

export default TrendingTrackItem;

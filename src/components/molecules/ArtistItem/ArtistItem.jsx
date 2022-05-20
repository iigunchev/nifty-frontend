/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// mobile
import { isMobile } from 'react-device-detect';
// avatar
import Avvvatars from 'avvvatars-react';
// toast
import { toast } from 'react-toastify';

// routes
import { useNavigate } from 'react-router-dom';
import { APP, ACCOUNT } from '../../../routes';
// custom hook
import useFetchItems from '../../../hooks/useFetchItems';
// styles
import './ArtistItem.scss';
// icons
import plus from '../../../assets/svg/plus.svg';
import userFollowed from '../../../assets/img/userFollowed.png';
import followArtist from '../../../utils/api/followArtist';

function ArtistItem({ id, image, name, avatarWidth = 150 }) {
  const navigate = useNavigate();
  const [artist, isLoadingArtist, setArtist] = useFetchItems(`account/${id}`);

  const handleFollowUser = async (e) => {
    e.stopPropagation();
    try {
      await followArtist(id, !artist.isFollowed);
      setArtist({ ...artist, isFollowed: !artist.isFollowed });
    } catch (error) {
      toast.error('Failed to follow user');
    }
  };
  return (
    <div
      role="button"
      onClick={() => navigate(`${APP}${ACCOUNT}/${id}`)}
      tabIndex={0}
      className="artistItemWrapper"
    >
      {!isLoadingArtist && (
        <div>
          {!artist.isFollowed ? (
            <button
              type="button"
              onClick={handleFollowUser}
              className="followUserBtn"
              style={{ opacity: isMobile ? 1 : 0 }}
            >
              <img className="followUserImage" src={plus} alt="follow user" />
            </button>
          ) : (
            <div className="followedUserWrapper">
              <img
                className="followedUserImage"
                src={userFollowed}
                alt="userFollowed"
              />
            </div>
          )}
        </div>
      )}
      <div className="imageWrapper">
        {image ? (
          <img src={image} className="userImage" alt="userImage" />
        ) : (
          <Avvvatars size={avatarWidth} radius={12} value={name} />
        )}
      </div>
      <h3 className="heading3 artistItemName">{name}</h3>
    </div>
  );
}

export default ArtistItem;

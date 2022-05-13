import React from 'react';
import './LikeButton.scss';

import heart from '../../../assets/svg/likeBtn.svg';
import heartFilled from '../../../assets/svg/likeBtnFilled.svg';

function LikeButton({ disabled = false, isLiked = false, handleLike }) {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        handleLike(!isLiked);
      }}
      className="likeButton"
      type="button"
    >
      <img
        src={isLiked ? heartFilled : heart}
        className="likeImage"
        alt="heart"
      />
    </button>
  );
}

export default LikeButton;

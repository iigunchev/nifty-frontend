import React, { useState } from 'react';
import './LikeButton.scss';

import heart from '../../../assets/svg/likeBtn.svg';
import heartFilled from '../../../assets/svg/likeBtnFilled.svg';

function LikeButton({ disabled = false, liked = false, handleLike }) {
  const [isLiked, setIsLiked] = useState(liked);
  return (
    <button
      disabled={disabled}
      onClick={() => {
        setIsLiked(!isLiked);
        handleLike(!isLiked);
      }}
      className="likeButton"
      type="button"
    >
      <img src={isLiked ? heartFilled : heart} alt="heart" />
    </button>
  );
}

export default LikeButton;

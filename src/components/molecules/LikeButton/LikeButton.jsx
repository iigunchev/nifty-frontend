import React, { useState } from 'react';
import './LikeButton.scss';

import heart from '../../../assets/svg/likeBtn.svg';
import heartFilled from '../../../assets/svg/likeBtnFilled.svg';

function LikeButton({ liked = false }) {
  const [isLiked, setIsLiked] = useState(liked);
  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="likeButton"
      type="button"
    >
      <img src={isLiked ? heartFilled : heart} alt="heart" />
    </button>
  );
}

export default LikeButton;

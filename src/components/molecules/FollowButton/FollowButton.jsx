import React from 'react';
import './FollowButton.scss';

function FollowButton({ disabled = false, isFollowing = false, handleFollow }) {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        handleFollow(!isFollowing);
      }}
      className="followButton"
      type="button"
    >
      {!isFollowing ? 'Follow' : 'UnFollow'}
    </button>
  );
}

export default FollowButton;

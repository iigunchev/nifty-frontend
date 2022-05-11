/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';

import './DialogInformation.scss';

function DialogInformation({ handleLike, isLiked }) {
  return (
    <div className="dialogInformationWrapper">
      <ul>
        <li>
          <button
            onClick={() => {
              handleLike(!isLiked);
            }}
            type="button"
          >
            {isLiked ? 'Remove like' : 'Add to my songs'}
          </button>
        </li>
        <li>
          <button type="button">Add to playlist</button>
        </li>
        <li>
          <button type="button">Edit track</button>
        </li>
      </ul>
    </div>
  );
}

export default DialogInformation;

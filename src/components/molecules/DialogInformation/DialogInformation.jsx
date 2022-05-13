/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';

import './DialogInformation.scss';

function DialogInformation({ handleLike, isLiked, handleAddToQueue }) {
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
            {isLiked ? 'Unlike' : 'Like'}
          </button>
        </li>
        <li>
          <button type="button">Add to playlist</button>
        </li>
        <li>
          <button onClick={handleAddToQueue} type="button">
            Add to queue
          </button>
        </li>
        <li>
          <button type="button">Edit track</button>
        </li>
      </ul>
    </div>
  );
}

export default DialogInformation;

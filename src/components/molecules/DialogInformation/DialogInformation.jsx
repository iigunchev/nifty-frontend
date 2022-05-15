/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';

// router dom
import { useParams } from 'react-router-dom';
// styles
import './DialogInformation.scss';

function DialogInformation({
  handleLike,
  isLiked,
  handleAddToQueue,
  handleDeleteTrack,
  handleAddToPlaylist,
  handleEditTrack
}) {
  const params = useParams();

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
          <button type="button" onClick={handleAddToPlaylist}>
            Add to playlist
          </button>
        </li>
        <li>
          <button onClick={handleAddToQueue} type="button">
            Add to queue
          </button>
        </li>
        <li>
          <button type="button" onClick={handleEditTrack}>
            Edit track
          </button>
        </li>
        {params['*'] === 'my-uploads' && (
          <li>
            <button type="button" onClick={handleDeleteTrack}>
              Delete track
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default DialogInformation;

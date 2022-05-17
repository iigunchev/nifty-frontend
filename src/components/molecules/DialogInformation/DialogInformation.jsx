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
  handleRemoveFromPlaylist,
  handleDeleteTrack,
  handleAddToPlaylist,
  handleEditTrack,
  clientCoordinates
}) {
  const params = useParams();
  // getting the path instead invoke useLocation
  // ["*"] is all entire path
  const [path] = params['*'].split('/');

  return (
    <div
      className={`dialogInformationWrapper ${
        clientCoordinates > 600 ? 'upperDialog' : 'lowerDialog'
      }`}
    >
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
        {path !== 'playlist' ? (
          <li>
            <button type="button" onClick={handleAddToPlaylist}>
              Add to playlist
            </button>
          </li>
        ) : (
          <li>
            <button
              type="button"
              onClick={() => handleRemoveFromPlaylist(params.id)}
            >
              Remove from playlist
            </button>
          </li>
        )}

        <li>
          <button onClick={handleAddToQueue} type="button">
            Add to queue
          </button>
        </li>
        {path === 'my-uploads' && (
          <>
            <li>
              <button type="button" onClick={handleEditTrack}>
                Edit track
              </button>
            </li>

            <li>
              <button type="button" onClick={handleDeleteTrack}>
                Delete track
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default DialogInformation;

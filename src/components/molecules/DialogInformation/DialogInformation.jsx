/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './DialogInformation.scss';
import {
  setTrackToDelete,
  openDeleteModal
} from '../../../redux/Dialog/dialogSlice';

function DialogInformation({
  handleLike,
  isLiked,
  handleAddToQueue,
  trackId,
  trackSrc
}) {
  const dispatch = useDispatch();
  const params = useParams();
  const handleDeleteTrack = () => {
    dispatch(openDeleteModal());
    dispatch(setTrackToDelete({ id: trackId, src: trackSrc }));
  };
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

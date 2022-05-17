/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// navigate
import { useNavigate } from 'react-router-dom';
// styles
import './PlaylistItem.scss';
// routes
import { APP } from '../../../routes/routes';
// icons
import defaultImage from '../../../assets/img/defaultSong.png';

import song from '../../../assets/svg/asideSvg/genresFilled.svg';
// utils
import PlaylistPlayButton from '../../atoms/PlaylistPlayButton/PlaylistPlayButton';

function PlaylistItem({ name, tracks, image, id }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`${APP}/playlist/${id}`);
      }}
      role="button"
      tabIndex={0}
      className="playListItemContainer"
    >
      <img
        src={image || defaultImage}
        className="playlistImage"
        alt="playlistBackground"
      />
      <div className="playListBottomContainer">
        <div className="detailsWrapper">
          <span className="detailTitle">{name}</span>
          <div className="detailDescription">
            <img src={song} alt="song" className="playlistSongIcon" />
            <span>{tracks.length} tracks</span>
          </div>
        </div>
        {tracks.length !== 0 ? <PlaylistPlayButton tracks={tracks} /> : null}
      </div>
    </div>
  );
}

export default PlaylistItem;

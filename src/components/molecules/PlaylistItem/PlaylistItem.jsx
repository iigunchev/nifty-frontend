/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// navigate
import { useNavigate } from 'react-router-dom';
// toast
import { toast } from 'react-toastify';
// redux
import { useDispatch } from 'react-redux';
import { setCurrentTrack, setQueue } from '../../../redux/Audio/audioSlice';
// styles
import './PlaylistItem.scss';
// routes
import { APP } from '../../../routes/routes';
// icons
import defaultImage from '../../../assets/img/defaultSong.png';
import play from '../../../assets/img/player/play.png';
import song from '../../../assets/svg/asideSvg/genresFilled.svg';
// utils
import { getAllTracksById } from '../../../utils/api/apiTrack';

function PlaylistItem({ name, tracks, image, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDispatchAllSongs = async (e) => {
    e.stopPropagation();
    try {
      const apiTracks = await getAllTracksById(tracks);
      // i quit the first element of queue because of bugs of player
      const firstTrack = apiTracks.shift();
      dispatch(setQueue(apiTracks));
      dispatch(
        setCurrentTrack({
          artist: firstTrack.artist.artisticName,
          src: firstTrack.url,
          title: firstTrack.title,
          image: firstTrack.thumbnail
        })
      );
    } catch (error) {
      toast.error('Theres no songs to play');
    }
  };
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
        <button
          onClick={handleDispatchAllSongs}
          type="button"
          className="playListActionButton"
        >
          <img className="filteredImg" src={play} alt="play" />
        </button>
      </div>
    </div>
  );
}

export default PlaylistItem;

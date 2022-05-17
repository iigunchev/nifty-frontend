import React from 'react';
/* eslint-disable no-param-reassign */
// toast
import { toast } from 'react-toastify';
// redux
import { useDispatch } from 'react-redux';
import { setCurrentTrack, setQueue } from '../../../redux/Audio/audioSlice';
// utils
import { getAllTracksById } from '../../../utils/api/apiTrack';
// icon
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';

function PlaylistPlayButton({ tracks, isActive }) {
  const dispatch = useDispatch();
  const handleDispatchAllSongs = async () => {
    try {
      const apiTracks = await getAllTracksById(tracks);
      if (apiTracks.length === 0) throw new Error("There's no song to play");
      // renaming tracks properties
      const queueTracks = apiTracks.map((track) => {
        track.src = track.url;
        track.artist = track.artist.artisticName;
        track.image = track.thumbnail;
        delete track.url;
        delete track.thumbnail;
        return track;
      });
      // i quit the first element of queue because of bugs of player
      dispatch(setQueue(queueTracks));
      dispatch(setCurrentTrack(queueTracks[0]));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDispatchAllSongs();
      }}
      type="button"
      className="playListActionButton"
    >
      <img className="filteredImg" src={isActive ? pause : play} alt="play" />
    </button>
  );
}

export default PlaylistPlayButton;

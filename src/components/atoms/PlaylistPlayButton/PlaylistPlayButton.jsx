import React from 'react';
/* eslint-disable no-param-reassign */
// toast
import { toast } from 'react-toastify';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack, setQueue } from '../../../redux/Audio/audioSlice';
// utils
import { getAllTracksById } from '../../../utils/api/apiTrack';
import shuffleArray from '../../../utils/shuffleArray';
// icon
import play from '../../../assets/img/player/play.png';

function PlaylistPlayButton({ tracks, isPlaylistView }) {
  const { isRandomizing } = useSelector((state) => state.audio);
  const dispatch = useDispatch();

  const setTrackProperties = (arrayTracks) => {
    const arrayWithProperties = arrayTracks.map((track) => ({
      src: track.url,
      artist: track.artist.artisticName,
      image: track.thumbnail,
      duration: track.duration,
      title: track.title
    }));
    if (isRandomizing) return shuffleArray(arrayWithProperties);
    return arrayWithProperties;
  };

  const handleDispatchPlayPlaylistView = () => {
    const queueTracks = setTrackProperties(tracks);

    dispatch(setQueue(queueTracks));
    dispatch(setCurrentTrack(queueTracks[0]));
  };
  const handleDispatchAllSongs = async () => {
    try {
      const apiTracks = await getAllTracksById(tracks);
      // renaming tracks properties
      const queueTracks = setTrackProperties(apiTracks);
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
        if (tracks.length === 0) return;
        if (isPlaylistView) {
          handleDispatchPlayPlaylistView();
          return;
        }
        handleDispatchAllSongs();
      }}
      type="button"
      className={isPlaylistView ? 'playlistPlayButton' : 'playListActionButton'}
    >
      <img className="filteredImg " src={play} alt="play" />
    </button>
  );
}

export default PlaylistPlayButton;

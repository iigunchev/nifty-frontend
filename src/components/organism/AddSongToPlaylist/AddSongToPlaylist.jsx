/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// toast
import { toast } from 'react-toastify';
// custom hooks
import useFetchItems from '../../../hooks/useFetchItems';
import updatePlaylist from '../../../utils/api/apiPlaylist';
// components
import TrendingItemSkeleton from '../../molecules/Skeletons/TrendingItemSkeleton';
import Modal from '../../template/Modal/Modal';
// style
import './AddSongToPlaylist.scss';
// icons
import defaultSong from '../../../assets/img/defaultSong.png';
import { closeModal, setModalAction } from '../../../redux/Dialog/dialogSlice';

function AddSongToPlaylist() {
  const dispatch = useDispatch();
  const [playlists, isLoading] = useFetchItems('playlist/byuser');
  const dialog = useSelector((state) => state.dialog);

  const handleAddToPlaylist = async (playlistId) => {
    dispatch(closeModal());
    dispatch(setModalAction(''));
    try {
      const apiPlaylist = await updatePlaylist(
        { track: dialog.track },
        { method: 'PUT', url: `/playlist/${playlistId}/add` }
      );
      toast.success(`Song added to ${apiPlaylist.name}`);
    } catch (e) {
      toast.error('Error to add the song');
    }
  };

  return (
    <Modal width={300} title="Select playlist">
      <div className="trendingListWrapper playlistScroller">
        {!isLoading ? (
          playlists.map((playlist) => (
            <div
              role="button"
              onClick={() => handleAddToPlaylist(playlist._id)}
              key={playlist._id}
              tabIndex={0}
              className={
                playlist.tracks.some((track) => track === dialog.track.id)
                  ? 'disabledlPlaylistWrapper modalPlaylistWrapper'
                  : 'modalPlaylistWrapper'
              }
            >
              <div className="modalPlaylistImage">
                <img src={playlist.thumbnail || defaultSong} alt="playlist" />
              </div>
              <span>
                <p className="modalPlaylistName">{playlist.name}</p>
              </span>
            </div>
          ))
        ) : (
          <TrendingItemSkeleton />
        )}
      </div>
    </Modal>
  );
}

export default AddSongToPlaylist;

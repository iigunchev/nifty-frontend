import React from 'react';
// redux
import { useSelector } from 'react-redux';
// toast
import { toast } from 'react-toastify';
// custom hooks
import useFetchItems from '../../../hooks/useFetchItems';
import updatePlaylist from '../../../utils/api/apiPlaylist';
// components
import TrendingItemSkeleton from '../../molecules/Skeletons/TrendingItemSkeleton';
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';
import Modal from '../../template/Modal/Modal';
// style
import './AddSongToPlaylist.scss';

function AddSongToPlaylist() {
  const [playlists, isLoading] = useFetchItems('playlist/byuser');
  const dialog = useSelector((state) => state.dialog);

  const handleAddToPlaylist = async (playlistId) => {
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
            <TrendingItem
              key={playlist._id}
              handleClick={handleAddToPlaylist}
              id={playlist._id}
              title={playlist.name}
              image={playlist.image}
            />
          ))
        ) : (
          <TrendingItemSkeleton />
        )}
      </div>
    </Modal>
  );
}

export default AddSongToPlaylist;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../../components/molecules/Button/Button';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import Modal from '../../components/template/Modal/Modal';
import useFetchItems from '../../hooks/useFetchItems';
import { closeDeleteModal } from '../../redux/Dialog/dialogSlice';
import { deleteTrack } from '../../utils/api/apiTrack';
import './MyUploads.scss';

function MyUploads() {
  const [songs, isLoading] = useFetchItems('track/byartist');
  const [queryState, setQueryState] = useState('');
  const dispatch = useDispatch();
  const { isDeleteModalOpen, trackToDelete } = useSelector(
    (state) => state.dialog
  );

  const handleDeleteTrack = async () => {
    setQueryState('loading');
    try {
      deleteTrack(trackToDelete.id);
      // delete asset from cloudinary ????
      toast.success('The track has been deleted');
    } catch (e) {
      toast.error('There has been an error. Please try again later');
    }
    setQueryState('');
    dispatch(closeDeleteModal());
  };

  const handleCancelDelete = () => {
    dispatch(closeDeleteModal());
  };

  return (
    <main>
      <h1 className="heading1">My Uploads</h1>
      <div className="listWrapper">
        {!isLoading ? (
          <TrendingList tracks={songs} />
        ) : (
          <TrendingTrackItemSkeleton />
        )}
      </div>
      <Modal
        title="Delete track"
        showing={isDeleteModalOpen}
        setShow={closeDeleteModal}
      >
        <div className="modalText">
          <span>Are you sure that you want to delete this track?</span>
        </div>
        <div className="buttonsWrapper">
          <button
            type="button"
            onClick={handleCancelDelete}
            className="cancelBtn"
          >
            Cancel
          </button>
          <Button
            size="md"
            handleClick={handleDeleteTrack}
            isLoading={queryState === 'loading'}
            type="submit"
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default MyUploads;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../../components/molecules/Button/Button';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import EditTrackForm from '../../components/organism/EditTrackForm/EditTrackForm';
import Modal from '../../components/template/Modal/Modal';
import useFetchItems from '../../hooks/useFetchItems';
import { closeModal } from '../../redux/Dialog/dialogSlice';
import { deleteTrack } from '../../utils/api/apiTrack';
import './MyUploads.scss';

function MyUploads() {
  const [songs, isLoading] = useFetchItems('track/byartist');
  const [queryState, setQueryState] = useState('');
  const dispatch = useDispatch();
  const { isModalOpen, track, modalAction } = useSelector(
    (state) => state.dialog
  );

  const handleDeleteTrack = async () => {
    setQueryState('loading');
    try {
      await deleteTrack(track.id);
      // delete asset from cloudinary ????
      toast.success('The track has been deleted');
    } catch (e) {
      toast.error('There has been an error. Please try again later');
    }
    setQueryState('');
    dispatch(closeModal());
  };

  const handleCancelDelete = () => {
    dispatch(closeModal());
  };

  return (
    <main style={{ padding: ' 1.5em' }}>
      <h1 className="heading1">My Uploads</h1>
      <div className="listWrapper">
        {!isLoading ? (
          <TrendingList
            tracks={songs}
            errorMessage="You didn't uploaded songs yet"
          />
        ) : (
          <TrendingTrackItemSkeleton />
        )}
      </div>
      <Modal title="" showing={isModalOpen} setShow={closeModal}>
        {/* Delete track modal */}
        {modalAction === 'delete' && (
          <div className="modalText">
            <span>Are you sure that you want to delete this track?</span>
          </div>
        )}
        {/* Edit track modal */}
        {modalAction === 'edit' && <EditTrackForm />}
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

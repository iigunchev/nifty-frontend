import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/molecules/Button/Button';
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import Modal from '../../components/template/Modal/Modal';
import useFetchItems from '../../hooks/useFetchItems';
import { toggleDeleteModal } from '../../redux/Dialog/dialogSlice';
import { deleteTrack } from '../../utils/api/apiTrack';
import './MyUploads.scss';

function MyUploads() {
  const [songs, isLoading] = useFetchItems('track/byartist');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryState, setQueryState] = useState('');
  const dispatch = useDispatch();
  const { isDeleteModalOpen, trackToDelete } = useSelector(
    (state) => state.dialog
  );

  const handleDeleteTrack = () => {
    setQueryState('loading');
    deleteTrack(trackToDelete.id)
      .then((res) => console.log(res)) // delete asset from cloudinary
      .catch((e) => console.log(e.message))
      .finally(() => {
        setQueryState('');
        dispatch(toggleDeleteModal(false));
      });
  };

  useEffect(() => {
    setIsModalOpen(isDeleteModalOpen);
  }, [isDeleteModalOpen]);

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
        showing={isModalOpen}
        setShow={setIsModalOpen}
      >
        <div className="modalText">
          <span>Are you sure that you want to delete this track?</span>
        </div>
        <div className="buttonsWrapper">
          <button
            type="button"
            onClick={() => dispatch(toggleDeleteModal(false))}
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

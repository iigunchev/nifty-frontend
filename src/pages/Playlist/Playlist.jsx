/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// formik
import { Formik } from 'formik';
import { toast } from 'react-toastify';
// router dom
import { useParams } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../redux/Dialog/dialogSlice';
// hooks
import useFetchItems from '../../hooks/useFetchItems';
// components
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import Modal from '../../components/template/Modal/Modal';
import PlaylistFormContainer from '../../components/molecules/PlaylistFormContainer/PlaylistFormContainer';
// import TrendingList from '../../components/organism/TrendingList/TrendingList';
// icons
import defaultPlaylist from '../../assets/img/defaultSong.png';
// styles
import './Playlist.scss';
// utils
import editPlaylist from '../../utils/api/apiPlaylist';
import { createPlaylistSchema } from '../../utils/schemas';

function Playlist() {
  // get playlist id and get playlist
  const { id } = useParams();
  const [playlist, isLoading, setPlaylist] = useFetchItems(`playlist/${id}`);
  // redux
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.dialog);
  // edit form values and image state
  const [playlistImage, setPlaylistImage] = useState(null);

  const initialValues = {
    name: playlist.name,
    description: playlist.description,
    publicAccessible: playlist.publicAccessible
  };

  const handleEditPlaylist = async (values) => {
    const toastId = toast.loading('Editing playlist...');
    dispatch(closeModal());
    try {
      const newPlaylist = await editPlaylist(
        {
          ...values,
          image: playlistImage
        },
        'PUT',
        playlist._id
      );
      console.log(newPlaylist);
      setPlaylist({ ...playlist, ...newPlaylist });
      toast.dismiss(toastId);
      toast.success('Playlist edited!');
    } catch (e) {
      toast.dismiss(toastId);
      toast.error('Failed to edit playlist, please, try again');
    }
  };

  return (
    <>
      <section className="playlistSectionContainer">
        <header className="playlistHeader">
          <div className="editableInformationWrapper">
            <button
              className="editablePlaylistButton"
              type="button"
              onClick={() => dispatch(openModal())}
            >
              <img src={playlist.thumbnail || defaultPlaylist} alt="playlist" />
            </button>

            <div
              role="button"
              tabIndex={0}
              onClick={() => dispatch(openModal())}
              className="playlistInfoWrapper"
            >
              <p>{playlist.description}</p>
              <h1 className="heading1 playlistName">{playlist.name}</h1>
            </div>
          </div>
        </header>

        {!isLoading ? <TrendingTrackItemSkeleton /> : null}
        {/* <TrendingList
          errorMessage="This playlist do not have tracks"
          tracks={playlist.tracks}
        /> */}
      </section>
      {!isLoading && isModalOpen ? (
        <Modal title="Edit your playlist">
          <Formik
            initialValues={initialValues}
            onSubmit={handleEditPlaylist}
            validationSchema={createPlaylistSchema}
          >
            {({ errors, touched }) => (
              <PlaylistFormContainer
                handleChangeImage={setPlaylistImage}
                playlistImage={playlist.iamge}
                errors={errors}
                touched={touched}
              />
            )}
          </Formik>
        </Modal>
      ) : null}
    </>
  );
}

export default Playlist;

import React, { useState } from 'react';
// components
import { Formik } from 'formik';
import { toast } from 'react-toastify';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../../redux/Dialog/dialogSlice';
// modal
import Modal from '../../template/Modal/Modal';
// formik
import { createPlaylistSchema } from '../../../utils/schemas';
// styles
import './CreatePlaylistForm.scss';
// icon
import PlaylistFormContainer from '../../molecules/PlaylistFormContainer/PlaylistFormContainer';
import createPlaylist from '../../../utils/api/apiPlaylist';
import Button from '../../molecules/Button/Button';

function CreatePlaylistForm({ playlists, setPlaylists }) {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.dialog);
  const [playlistImage, setPlaylistImage] = useState(null);
  const initialValues = {
    name: `My new playlist`,
    description: '',
    publicAccessible: true
  };

  const handleSubmit = async (values) => {
    const toastId = toast.loading('Creating playlist...');
    dispatch(closeModal());
    try {
      const newPlaylist = await createPlaylist({
        ...values,
        image: playlistImage
      });
      setPlaylists([...playlists, newPlaylist]);
      toast.dismiss(toastId);
      toast.success('Playlist created!');
    } catch (e) {
      toast.dismiss(toastId);
      toast.error('Failed to create playlist, please, try again');
    }
  };

  return (
    <section className="createPlaylistSection">
      <Button
        handleClick={() => dispatch(openModal())}
        className="OpenCreatePlaylistButton"
        type="button"
      >
        <span>Create new</span>
      </Button>
      {isModalOpen ? (
        <Modal title="Create your playlist">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={createPlaylistSchema}
          >
            {({ errors, touched }) => (
              <PlaylistFormContainer
                errors={errors}
                touched={touched}
                handleChangeImage={setPlaylistImage}
              />
            )}
          </Formik>
        </Modal>
      ) : null}
    </section>
  );
}

export default CreatePlaylistForm;

import React, { useState } from 'react';
// components
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import Modal from '../../template/Modal/Modal';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';
// formik
import { createPlaylistSchema } from '../../../utils/schemas';
// styles
import './CreatePlaylistForm.scss';
// icon
import plusIcon from '../../../assets/svg/plus.svg';
import PlaylistFormContainer from '../../molecules/PlaylistFormContainer/PlaylistFormContainer';
import createPlaylist from '../../../utils/api/apiPlaylist';

function CreatePlaylistForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistImage, setPlaylistImage] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const initialValues = {
    name: `My new playlist`,
    description: ''
  };

  const handleSubmit = async (values) => {
    const toastId = toast.loading('Creating playlist...');
    setIsModalOpen(false);
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
      <SecondaryButton
        handleClick={() => setIsModalOpen(true)}
        className="OpenCreatePlaylistButton"
        type="button"
      >
        <img src={plusIcon} alt="plus" />
        <span>Create new playlist</span>
      </SecondaryButton>
      {isModalOpen ? (
        <Modal
          title="Create your playlist"
          showing={isModalOpen}
          setShow={setIsModalOpen}
        >
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

import React, { useState } from 'react';
// components
import { Formik } from 'formik';
import { toast } from 'react-toastify';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistImage, setPlaylistImage] = useState(null);
  const initialValues = {
    name: `My new playlist`,
    description: ''
  };

  const handleSubmit = async (values) => {
    const toastId = toast.loading('Creating playlist...');
    setIsModalOpen(false);
    console.log(values);
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
        handleClick={() => setIsModalOpen(true)}
        className="OpenCreatePlaylistButton"
        type="button"
      >
        <span>Create new</span>
      </Button>
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

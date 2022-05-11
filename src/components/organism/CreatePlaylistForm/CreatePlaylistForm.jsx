import React, { useState } from 'react';
// components
import { Formik } from 'formik';
import Modal from '../../template/Modal/Modal';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';
// formik
import { createPlaylistSchema } from '../../../utils/schemas';
// styles
import './CreatePlaylistForm.scss';
// icon
import plusIcon from '../../../assets/svg/plus.svg';
import PlaylistFormContainer from '../../molecules/PlaylistFormContainer/PlaylistFormContainer';

function CreatePlaylistForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playlists = [];

  const initialValues = {
    name: `My playlist #${playlists.length + 1}`,
    image: null,
    description: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
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
              <PlaylistFormContainer errors={errors} touched={touched} />
            )}
          </Formik>
        </Modal>
      ) : null}
    </section>
  );
}

export default CreatePlaylistForm;

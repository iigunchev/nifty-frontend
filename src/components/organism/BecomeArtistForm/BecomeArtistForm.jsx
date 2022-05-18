import React from 'react';
// router link
import { Link } from 'react-router-dom';
// styles
import './BecomeArtistForm.scss';
// formik
import { Form, Formik } from 'formik';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setUser } from '../../../redux/User/userSlice';
// components
import Button from '../../molecules/Button/Button';
// utils
import { updateUserProfile } from '../../../utils/api/apiUser';
// routes
import { ACCOUNT, APP } from '../../../routes';
import Modal from '../../template/Modal/Modal';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import { createPlaylistSchema } from '../../../utils/schemas';
import { closeModal, openModal } from '../../../redux/Dialog/dialogSlice';

function BecomeArtistForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = async ({ name }) => {
    dispatch(closeModal());
    try {
      const newArtistUser = await updateUserProfile(
        { artist: !user.artist, artisticName: name },
        user.id
      );
      if (newArtistUser.artist) {
        toast.success(`Welcome ${newArtistUser.artisticName}`);
      }
      dispatch(setUser(newArtistUser));
    } catch (e) {
      toast.error('Failed to create artist');
    }
  };
  return (
    <section className="ArtistSection">
      <h1 className="heading1">Become An Artist</h1>
      <p>
        Being an artist means that you will be able to upload your own songs.
      </p>
      <p>Become an artist in just one click</p>
      <div className="flexWrapper">
        <Link to={`${APP}${ACCOUNT}`} className="backButton">
          Back
        </Link>
        <Button
          type="submit"
          handleClick={user.artist ? handleSubmit : () => dispatch(openModal())}
        >
          {!user.artist ? 'Be Artist' : 'Cancel Suscription'}
        </Button>
        <Modal title="Becoming an artist!">
          <Formik
            initialValues={{ name: '' }}
            onSubmit={handleSubmit}
            validationSchema={createPlaylistSchema}
          >
            {({ errors, touched }) => (
              <Form className="artisticNameForm">
                <AccountEditInput
                  error={errors.name}
                  touched={touched.name}
                  name="name"
                  label="Artistic name"
                />
                <Button type="submit">Submit name!</Button>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>
    </section>
  );
}

export default BecomeArtistForm;

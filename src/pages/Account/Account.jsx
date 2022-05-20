import React, { useState } from 'react';
// router dom
import { Link } from 'react-router-dom';
// loader component
import { Waveform } from '@uiball/loaders';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/User/userSlice';
import { closeModal, openModal } from '../../redux/Dialog/dialogSlice';
// components
import UserInfoRow from '../../components/molecules/UserInfoRow/UserInfoRow';
// routes
import {
  APP,
  CHANGE_PASSWORD,
  EDIT_PROFILE,
  BECOME_ARTIST
} from '../../routes';
// styles
import './Account.scss';
// components
import Avatar from '../../components/atoms/Avatar/Avatar';
import Modal from '../../components/template/Modal/Modal';
import ErrorContainer from '../../components/molecules/ErrorContainer/ErrorContainer';
// utils fn
import { updateUserProfile } from '../../utils/api/apiUser';
import createFormData from '../../utils/createFormData';

import { blobToBase64 } from '../../utils/meta/getMetadata';
import { uploadToCloudinaryWithProgress } from '../../utils/cloudinary/uploadToCloudinary';

// icons

function Account() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [error, setError] = useState('');
  const [queryState, setQueryState] = useState('');
  const [newAvatarImage, setNewAvatarImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(user.profileImage);

  const handleChangePreviewImage = async (e) => {
    const preview = await blobToBase64(e.target.files[0]);
    setPreviewImage(preview);
    setNewAvatarImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newAvatarImage) {
      setError('Please upload an image');
      return;
    }
    setQueryState('isLoading');
    setError('');
    try {
      const formData = createFormData(newAvatarImage, 'avatar');
      const data = await uploadToCloudinaryWithProgress('image', formData);
      const profileImage = { profileImage: data.secure_url };
      const userApi = await updateUserProfile(profileImage, user.id);
      dispatch(setUser(userApi));
    } catch (err) {
      setError(err.message);
    } finally {
      dispatch(closeModal());
      setQueryState('');
    }
  };

  return (
    <main className="accountContainer">
      <h1 className="heading1">Account</h1>
      <div className="accountCols">
        <div className="colsWrapper">
          <section className="flex-between">
            <div className="accountAvatarContainer">
              <Avatar size={150} />
              <button
                type="button"
                className="editAvatarButton"
                onClick={() => dispatch(openModal())}
              >
                Edit
              </button>
            </div>
            <section className="accountTopRow">
              <div style={{ width: '100%' }}>
                <h2 className="heading2">Account Type</h2>
                <UserInfoRow
                  type="Status"
                  details={!user.artist ? 'Normal User' : 'Artist'}
                />
                <div className="buttonWrapper">
                  <Link to={`${APP}${BECOME_ARTIST}`} className="accountLink">
                    Change
                  </Link>
                </div>
              </div>
            </section>
          </section>
          <section>
            <h2 className="heading2">Details</h2>
            <UserInfoRow type="First Name" details={user.firstName} />
            <UserInfoRow type="Last Name" details={user.lastName} />
            <UserInfoRow type="Email" details={user.email} />
          </section>
          <div className="buttonWrapper">
            <Link to={`${APP}${EDIT_PROFILE}`} className="accountLink">
              Edit
            </Link>
          </div>
          <section>
            <div>
              <h2 className="heading2">Password</h2>
              <UserInfoRow type="Password" details="**********" />
            </div>
          </section>
          <div className="buttonWrapper">
            <Link to={`${APP}${CHANGE_PASSWORD}`} className="accountLink">
              Update
            </Link>
          </div>
        </div>
      </div>
      <Modal title="Update profile image">
        <form
          method="PUT"
          onSubmit={handleUpload}
          className="accountUpdateModalForm"
        >
          <img src={previewImage} alt="" className="newAvatar" />

          <label className="customFileUpload">
            <input
              onChange={handleChangePreviewImage}
              type="file"
              name="file"
              id="uploadImage"
            />
          </label>
          <div className="buttonWrapper">
            <button
              type="submit"
              className="uploadButton"
              onClick={handleUpload}
            >
              {queryState ? (
                <Waveform size={30} lineWeight={2} speed={1} color="#9c32f1" />
              ) : (
                'SAVE'
              )}
            </button>
          </div>
          <ErrorContainer error={error} />
        </form>
      </Modal>
    </main>
  );
}

export default Account;

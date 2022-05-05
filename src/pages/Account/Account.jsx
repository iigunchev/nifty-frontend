import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Waveform } from '@uiball/loaders';
// components
import UserInfoRow from '../../components/molecules/UserInfoRow/UserInfoRow';
// routes
import {
  APP,
  CHANGE_PASSWORD,
  EDIT_PROFILE,
  BECOME_ARTIST
} from '../../routes';
import './Account.scss';
import Avatar from '../../components/atoms/Avatar/Avatar';
import Modal from '../../components/template/Modal/Modal';
// import Button from '../../components/molecules/Button/Button';
import { updateUserProfile } from '../../utils/api/apiUser';
import { setUser } from '../../redux/User/userSlice';
import uploadToCloudinary from '../../utils/cloudinary/uploadToCloudinary';
import ErrorContainer from '../../components/molecules/ErrorContainer/ErrorContainer';

function Account() {
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newAvatarImage, setNewAvatarImage] = useState(null);
  const [queryState, setQueryState] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const toggleModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };
  const input = document.querySelector('input[type="file"]');

  const handleSubmit = async (event) => {
    setError('');
    event.preventDefault();
    if (input?.files.length === 0) {
      return setError('Please upload an image');
    }
    setQueryState('isLoading');
    try {
      const form = event.currentTarget;
      const fileInput = Array.from(form.elements).find(
        ({ name }) => name === 'file'
      );
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      formData.append('upload_preset', 'avatar');
      const data = await uploadToCloudinary('image', formData);
      return setNewAvatarImage(data.secure_url);
    } catch (e) {
      return setError(e.message);
    } finally {
      setQueryState('');
    }
  };

  const handleUpload = async () => {
    setQueryState('isLoading');
    try {
      const profileImage = { profileImage: newAvatarImage };
      const userApi = await updateUserProfile(profileImage, user.id);
      dispatch(setUser(userApi));
    } catch (e) {
      setError(e.message);
    } finally {
      setQueryState('');
    }
  };
  return (
    <main className="accountContainer">
      <h1 className="heading1">Account</h1>
      <div className="accountCols">
        <div>
          <section>
            <h2 className="heading2">Details</h2>
            <UserInfoRow type="First Name" details={user.firstName} />
            <UserInfoRow type="Last Name" details={user.lastName} />
            <UserInfoRow type="Email" details={user.email} />
          </section>
          <div className="buttonWrapper">
            <Link to={`${APP}${EDIT_PROFILE}`} className="accountLink">
              Edit Profile
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
              Change Password
            </Link>
          </div>
          <section>
            <div>
              <h2 className="heading2">Type Account</h2>
              <UserInfoRow
                type="Type Account"
                details={!user.artist ? 'Normal User' : 'Artist'}
              />
            </div>
          </section>
          <div className="buttonWrapper">
            <Link to={`${APP}${BECOME_ARTIST}`} className="accountLink">
              Become Artist
            </Link>
          </div>
        </div>

        <label htmlFor="uploadImage" className="updateAvatar">
          <Avatar />
          <button
            type="button"
            className="editAvatarButton"
            onClick={toggleModal}
          >
            Edit
          </button>
        </label>
      </div>
      <Modal
        showing={isModalVisible}
        setShow={setIsModalVisible}
        title="Update profile image"
      >
        <form
          method={!newAvatarImage ? 'POST' : ''}
          onSubmit={handleSubmit}
          className="accountUpdateModalForm"
        >
          {!newAvatarImage ? <Avatar /> : <img src={newAvatarImage} alt="" />}

          <label className="customFileUpload">
            <input type="file" name="file" id="uploadImage" />
          </label>
          <div className="buttonWrapper">
            {!newAvatarImage ? (
              <button
                type="submit"
                className="uploadButton"
                disabled={queryState}
              >
                {queryState ? (
                  <Waveform
                    size={40}
                    lineWeight={3.5}
                    speed={1}
                    color="#9c32f1"
                  />
                ) : (
                  'Upload'
                )}
              </button>
            ) : (
              <button
                type="submit"
                className="uploadButton"
                disabled={!newAvatarImage}
                onClick={handleUpload}
              >
                {queryState ? (
                  <Waveform
                    size={30}
                    lineWeight={2}
                    speed={1}
                    color="#9c32f1"
                  />
                ) : (
                  'SAVE'
                )}
              </button>
            )}
          </div>
          <ErrorContainer error={error} />
        </form>
      </Modal>
    </main>
  );
}

export default Account;

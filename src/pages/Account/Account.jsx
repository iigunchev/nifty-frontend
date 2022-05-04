import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import UserInfoRow from '../../components/molecules/UserInfoRow/UserInfoRow';
// routes
import { APP, CHANGE_PASSWORD, EDIT_PROFILE } from '../../routes';
import './Account.scss';
import Avatar from '../../components/atoms/Avatar/Avatar';
import Modal from '../../components/template/Modal/Modal';
import Button from '../../components/molecules/Button/Button';

function Account() {
  const user = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);
  const [newAvatarImage, setNewAvatarImage] = useState('');
  const [queryState, setQueryState] = useState('');

  const toggleModal = () => {
    setIsVisible((prevState) => !prevState);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setQueryState('isLoading');
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    );
    const formData = new FormData();

    formData.append('file', fileInput.files[0]);

    formData.append('upload_preset', 'my-uploads');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/cloudmedia2022/image/upload',
      {
        method: 'POST',
        body: formData
      }
    ).then((r) => r.json());

    setNewAvatarImage(data.secure_url);
    setQueryState('');
    console.log(newAvatarImage);
  };
  const handleUpload = () => {
    console.log('Upload');
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
        showing={isVisible}
        setShow={setIsVisible}
        title="Update profile image"
      >
        <form
          method={!newAvatarImage ? 'POST' : ''}
          onSubmit={handleSubmit}
          className="accountUpdateModalForm"
        >
          {newAvatarImage ? (
            <div className="avatarImagePreviewWrapper">
              <img src={newAvatarImage} alt="" className="avatarImagePreview" />
            </div>
          ) : null}
          <label className="customFileUpload">
            <input type="file" name="file" id="uploadImage" />
          </label>
          <div className="buttonWrapper">
            <Button type="submit" size="md" isLoading={queryState}>
              Upload
            </Button>
            <button type="button" className="saveButton" onClick={handleUpload}>
              SAVE
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default Account;

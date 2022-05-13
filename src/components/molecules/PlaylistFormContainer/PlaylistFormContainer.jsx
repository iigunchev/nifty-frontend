import React, { useState } from 'react';
// components
import { Field, Form } from 'formik';
import AccountEditInput from '../AccountEditInput/AccountEditInput';
import Button from '../Button/Button';
// icon
import defaultSong from '../../../assets/img/defaultSong.png';
import pencil from '../../../assets/svg/pencil.svg';
// styles
import './PlaylistFormContainer.scss';
import { blobToBase64 } from '../../../utils/meta/getMetadata';

function PlaylistFormContainer({ errors, touched, handleChangeImage }) {
  const [editImage, setEditImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImagePreview = async (e) => {
    handleChangeImage(e.target.files[0]);
    const image = await blobToBase64(e.target.files[0]);
    setImagePreview(image);
  };
  return (
    <Form className="playlistFormWrapper">
      <div className="playlistInputsContainer">
        <div className="playlistImageWrapper">
          <label
            htmlFor="playlistImage"
            onMouseEnter={() => setEditImage(true)}
            onMouseLeave={() => setEditImage(false)}
          >
            <input
              id="playlistImage"
              onChange={handleImagePreview}
              className="displayNone"
              type="file"
            />
            {editImage ? (
              <span className="hoveredPlaylistImage">
                <img src={pencil} alt="pencil" /> <p>Edit</p>
              </span>
            ) : null}
            <img
              className="playlistImage"
              src={imagePreview || defaultSong}
              alt="playlist"
            />
          </label>
        </div>
        <div className="playlistTextInputs">
          <AccountEditInput
            name="name"
            label="Name"
            error={errors.name}
            touched={touched.name}
          />
          <Field
            as="textarea"
            className="playlistTextArea"
            name="description"
            placeholder="Optional description"
          />
          <div className="checkboxPublicAccess">
            <Field type="checkbox" name="publicAccessible" />
            <p>Public playlist</p>
          </div>
        </div>
      </div>
      <Button type="submit">Create playlist</Button>
    </Form>
  );
}

export default PlaylistFormContainer;

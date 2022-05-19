import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// styles
import './EditTrackForm.scss';
// components
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';

import Button from '../../molecules/Button/Button';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';

// utils
import handleAuthErrors from '../../../utils/handleAuthErrors';
import { updateTrack } from '../../../utils/api/apiTrack';
import { uploadSongSchema } from '../../../utils/schemas';
import useFetchItems from '../../../hooks/useFetchItems';
import { blobToBase64 } from '../../../utils/meta/getMetadata';
import uploadToCloudinary from '../../../utils/cloudinary/uploadToCloudinary';

function EditTrackForm() {
  // fb custom hook for useEffect fetch
  const [genres, isLoading, setIsLoading] = useFetchItems('genres');
  const { track } = useSelector((state) => state.dialog);
  // image preview / uploaded states
  const [preview, setPreview] = useState(track.img);
  const [newImg, setNewImg] = useState(null);
  // default genre value
  const [defGenreValue, setDefGenreValue] = useState(null);

  const initialValues = {
    title: track.name,
    genre: track.genre,
    image: track.img
  };
  const handleSubmit = async (formValues) => {
    setIsLoading(true);
    try {
      const updatedTrackInfo = {
        title: formValues.title,
        genre: formValues.genre,
        thumbnail: track.img
      };
      if (newImg) {
        const formData = new FormData();
        formData.append('upload_preset', 'avatar');
        formData.append('file', newImg);
        const data = await uploadToCloudinary('image', formData);
        updatedTrackInfo.thumbnail = data.secure_url;
      }
      await updateTrack(track.id, updatedTrackInfo);
      toast.success('Song uploaded!');
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  // User has uploaded a track image
  const onSelectFile = async (e) => {
    const newTrackImg = await blobToBase64(e.target.files[0]);
    setPreview(newTrackImg);
    setNewImg(e.target.files[0]);
  };

  return (
    <article className="uploadTrackFormContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={uploadSongSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="formWrapper">
              <div className="leftCol">
                <AccountEditInput
                  type="text"
                  name="title"
                  label="Track name"
                  error={errors.title}
                  touched={touched.title}
                  placeholder="Title"
                />
                <AccountEditInput
                  list="trackUploadList"
                  name="genre"
                  label="Genre"
                  error={errors.genre}
                  touched={touched.genre}
                  placeholder="Title"
                  component="select"
                  className="searchGenreInput"
                >
                  <option defaultValue value={defGenreValue}>
                    {track.genre}
                  </option>
                  {genres.length > 0 &&
                    genres.map((genre) => {
                      if (genre.name === track.genre) {
                        setDefGenreValue(genre._id);
                        return null;
                      }
                      return (
                        <option key={genre._id} value={genre._id}>
                          {genre.name}
                        </option>
                      );
                    })}
                </AccountEditInput>
              </div>
              <div className="rightCol">
                <label
                  htmlFor="uploadTrackFile"
                  className="uploadTrackFileLabel"
                >
                  <input
                    type="file"
                    name="uploadTrackFile"
                    id="uploadTrackFile"
                    className="displayNone"
                    onChange={onSelectFile}
                  />
                  <img src={preview} alt="" className="trackImage" />
                  <span role="button" className="editTrackImageBtn">
                    Edit
                  </span>
                </label>
              </div>
            </div>
            <div className="buttonWrapper">
              <Button type="submit" size="md" isLoading={isLoading}>
                UPLOAD
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </article>
  );
}

export default EditTrackForm;

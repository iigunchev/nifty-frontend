import React, { useState, useEffect } from 'react';
// styles
import './UploadTrackForm.scss';
// components
import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import Button from '../../molecules/Button/Button';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import UploadProgressBar from '../../molecules/UploadProgressBar/UploadProgressBar';
// utils
import getMetadata from '../../../utils/meta/getMetadata';
import getImage from '../../../utils/trackImageChecker';
import { uploadToCloudinaryWithProgress } from '../../../utils/cloudinary/uploadToCloudinary';
import handleAuthErrors from '../../../utils/handleAuthErrors';
import createTrack from '../../../utils/api/apiTrack';
import { uploadSongSchema } from '../../../utils/schemas';
import getGenresFromApi from '../../../utils/api/apiGenre';
import { useAuth } from '../../../services/auth/auth';

function UploadTrackForm() {
  // fb custom hook for useEffect fetch
  const currentUser = useAuth();
  // image preview / uploaded states
  const [preview, setPreview] = useState(null);
  const [hasUserUploadedImage, setHasUserUploadedImage] = useState(false);
  // genres
  const [genres, setGenres] = useState([]);
  // first drag metadata values
  const [metadata, setMetadata] = useState(null);
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // upload progress state
  const [progress, setProgress] = useState(0);

  const initialValues = {
    title: metadata?.title || '',
    genre: '',
    image: metadata?.image
  };

  const handleSubmit = async (formValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('upload_preset', 'track-upload');
      const cloudFiles = {
        audio: null,
        image: null
      };
      if (metadata.image) {
        const image = await getImage(metadata.image, hasUserUploadedImage);
        formData.append('file', image);
        cloudFiles.image = await uploadToCloudinaryWithProgress(
          'image',
          formData
        );
      }
      formData.append('file', metadata.file);
      cloudFiles.audio = await uploadToCloudinaryWithProgress(
        'video',
        formData,
        setProgress
      );

      const songData = {
        title: formValues.title,
        genre: formValues.genre,
        url: cloudFiles.audio.url,
        duration: cloudFiles.audio.duration,
        thumbnail: cloudFiles.image?.url
      };
      await createTrack(songData);
      // refresh state
      setMetadata(null);
      toast.success('Song uploaded!');
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDragFile = async (track) => {
    const trackData = await getMetadata(track[0]);
    setMetadata(trackData);
  };

  useEffect(() => {
    if (!currentUser) return;
    (async () => {
      try {
        const allGenres = await getGenresFromApi();
        setGenres(allGenres);
      } catch (e) {
        // ERROR HANDLING MISSING
        // ? setting metadata null?
        console.log(e.message);
      }
    })();
  }, [currentUser]);

  useEffect(() => {
    if (!metadata?.image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(metadata.image);
    setPreview(objectUrl);
    // eslint-disable-next-line consistent-return
    return () => URL.revokeObjectURL(objectUrl);
  }, [metadata?.image]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setMetadata({ ...metadata, image: null });
      return;
    }
    setMetadata({ ...metadata, image: e.target.files[0] });
    setHasUserUploadedImage(true);
  };

  return metadata ? (
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
                  <option default>Select a genre</option>
                  {genres.map((genre) => (
                    // eslint-disable-next-line jsx-a11y/control-has-associated-label
                    <option key={genre._id} value={genre._id}>
                      {genre.name}
                    </option>
                  ))}
                </AccountEditInput>
              </div>
              <div className="rightCol">
                <label
                  htmlFor="uploadTrackFile"
                  className="uploadTrackFileLabel"
                >
                  <Field
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

      {isLoading ? <UploadProgressBar progress={progress} /> : null}
    </article>
  ) : (
    <UploadZone className="dragZoneWrapper" handleDragFile={handleDragFile} />
  );
}

export default UploadTrackForm;

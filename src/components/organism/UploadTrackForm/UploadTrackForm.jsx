import React, { useState, useEffect } from 'react';

import './UploadTrackForm.scss';
// components
import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import UploadProgressBar from '../../molecules/UploadProgressBar/UploadProgressBar';
// utils
import getMetadata from '../../../utils/meta/getMetadata';
import { uploadToCloudinaryWithProgress } from '../../../utils/cloudinary/uploadToCloudinary';
import handleAuthErrors from '../../../utils/handleAuthErrors';

import createTrack from '../../../utils/api/apiTrack';
import schemas from '../../../utils/schemas';
import getGenresFromApi from '../../../utils/api/apiGenre';
import Button from '../../molecules/Button/Button';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import { useAuth } from '../../../services/auth/auth';
import defaultSong from '../../../assets/img/defaultSong.png';

function UploadTrackForm() {
  const currentUser = useAuth();

  const [genres, setGenres] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const initialValues = {
    title: metadata?.title,
    genreSearch: metadata?.genre,
    image: metadata?.image
  };

  const handleSubmit = async (formValues) => {
    const genreId = genres.find((genre) => {
      if (genre.name === formValues.genreSearch) {
        return genre._id;
      }
      return null;
    });
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('upload_preset', 'track-upload');
      const cloudFiles = {
        audio: null,
        image: null
      };
      if (metadata.image) {
        formData.append('file', metadata.image);
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

      const mock = {
        title: formValues.title,
        genre: genreId,
        url: cloudFiles.audio.url,
        duration: cloudFiles.audio.duration,
        thumbnail: cloudFiles.image?.url
      };
      await createTrack(mock);
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

  return (
    <div style={{ padding: '1em' }}>
      {metadata ? (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={schemas.uploadSongSchema}
            onSubmit={(values) => handleSubmit(values)}
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
                    <label htmlFor="genreSearch">
                      Genre
                      <Field
                        name="genreSearch"
                        type="search"
                        list="trackUploadList"
                        error={errors.genreSearch}
                        className="searchGenreInput"
                        placeholder="Rock, Pop, Flamenco..."
                        required
                      />
                      <datalist id="trackUploadList">
                        {genres.map((genre) => (
                          // eslint-disable-next-line jsx-a11y/control-has-associated-label
                          <option key={genre._id} value={genre.name}>
                            {genre.name}
                          </option>
                        ))}
                      </datalist>
                    </label>
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
                        onChange={(e) => {
                          setMetadata({
                            ...metadata,
                            image: e.target.files[0]
                          });
                        }}
                      />
                      <img
                        src={metadata?.image || defaultSong}
                        alt=""
                        className="trackImage"
                      />
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
        </>
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
    </div>
  );
}

export default UploadTrackForm;

import React, { useState, useEffect } from 'react';
// components
import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import { Waveform } from '@uiball/loaders';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
// utils
import getMetadata from '../../../utils/meta/getMetadata';
import handleAuthErrors from '../../../utils/handleAuthErrors';
import { progressUpload } from '../../../utils/cloudinary/uploadToCloudinary';
import createTrack from '../../../utils/api/apiTrack';
import schemas from '../../../utils/schemas';
import getGenresFromApi from '../../../utils/api/apiGenre';
import Button from '../../molecules/Button/Button';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import { useAuth } from '../../../services/auth/auth';

function UploadTrackForm() {
  const currentUser = useAuth();
  const [genres, setGenres] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const initialValues = {
    title: '',
    genreSearch: ''
  };

  const handleSubmit = async (formValues) => {
    const genreId = genres.find((genre) => {
      if (genre.name === formValues.genreSearch) {
        return genre._id;
      }
    });
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', metadata.file);
      formData.append('upload_preset', 'track-upload');
      const data = await progressUpload('video', formData, setProgress);
      const mock = {
        title: formValues.title,
        genre: genreId,
        url: data.url,
        duration: data.duration,
        thumbnail: metadata.image ? metadata.image : null
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
    (async () => {
      try {
        const allGenres = await getGenresFromApi();
        setGenres(allGenres);
      } catch (e) {
        // ERROR HANDLING MISSING
        console.log(e.message);
      }
    })();
  }, [currentUser]);

  return (
    <div style={{ padding: '1em' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.uploadSongSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <AccountEditInput
              type="text"
              name="title"
              label="Track name"
              error={errors.title}
              touched={touched.title}
            />
            <Field
              name="genreSearch"
              type="search"
              list="trackUploadList"
              error={errors.genreSearch}
              required
            />
            <datalist id="trackUploadList">
              {genres.map((genre) => (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </datalist>
            <Button type="submit" size="md" isLoading={isLoading}>
              {isLoading ? (
                <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
              ) : (
                'UPLOAD'
              )}
            </Button>
          </Form>
        )}
      </Formik>

      <img
        src={
          metadata?.image ||
          'https://static.vecteezy.com/system/resources/thumbnails/001/200/758/small/music-note.png'
        }
        alt="hola"
      />
      {isLoading ? <ProgressBar progress={progress} /> : null}
      <UploadZone handleDragFile={handleDragFile} />
    </div>
  );
}

export default UploadTrackForm;

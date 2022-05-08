import React, { useState } from 'react';
// components
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { async } from '@firebase/util';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
// utils
import handleAuthErrors from '../../../utils/handleAuthErrors';
import getMetadata from '../../../utils/meta/getMetadata';
import { progressUpload } from '../../../utils/cloudinary/uploadToCloudinary';
import createTrack from '../../../utils/api/apiTrack';

import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import uploadSongSchema from '../../../utils/schemas';
import fetchapiGenre from '../../../utils/api/apiGenre';

function UploadTrackForm() {
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', metadata.file);
      formData.append('upload_preset', 'track-upload');
      const data = await progressUpload('video', formData, setProgress);
      const mock = {
        title: 'Motopapi',
        genre: '62723508917a49452cc45356',
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

  //const getGenreTrack = async () => {
  //const apiGenres = await fetchapiGenre();
  function GenresList(props) {
    const genres = props.genres;

    genres.map(function (genres) {
      console.log(genres);
    });

    return (
      <datalist id="genres-list">
        {genres.map(function (genres) {
          return <option value={genres} />;
        })}
      </datalist>
    );
  }

  function GenresInput(genres) {
    const apiGenres = fetchapiGenre();
    const category = genres.category;
    return (
      <div>
        <input
          list="genres-list"
          // onChange={handleChange}
          type="text"
          placeholder="Search..."
        />
        <GenresList genres={apiGenres} />
      </div>
    );
  }

  // apiGenre.map(function (genre) {
  //console.log(apiGenres);
  // });
  // const genrees = apiGenre.map((value) => {
  //   return value;
  // });

  // const renderbase = ({ apiGenres }) => {
  //   if (apiGenres) {
  //     return Object.keys(apiGenres).map((item, index) => {
  //       return (
  //         <option value={apiGenres[item].code} key={index}>
  //           {apiGenres[item].symbol}
  //         </option>
  //       );
  //     });
  //   }
  // };

  const handleDragFile = async (track) => {
    const trackData = await getMetadata(track[0]);
    setMetadata(trackData);
    getGenreTrack();
  };

  const [formValues, setFormvalues] = useState({
    title: ''
  });

  const initialValues = {
    title: metadata?.title
  };

  return (
    <div>
      {metadata ? (
        <>
          <div>{metadata.title}</div>
          <Formik
            initialValues={initialValues}
            validationSchema={uploadSongSchema}
          >
            <Form>
              <AccountEditInput label="title" name="title" />
              <input type="search" label="genre" name="genre" />
              <label>
                Choose a Genre for you track
                <input list="trackUpladList" />
              </label>
              <GenresInput />
              {/* <datalist>
                {apiGenres.map(function (genre) {
                  <option value={genre} />;
                })}
                ;
              </datalist> */}

              {/* <datalist id="trackUpladList" >
                <datalist>{apiGenre.map()}</option>
                <option data-value="vlor1" label="Valor 1" />
                <option data-value="Valor 2" label="Valor 1" />
              </datalist> */}
              <div>Album</div>
            </Form>
          </Formik>
          <div>{metadata.title}</div>
          <img src={metadata.image} alt="hola" />
          <button type="button" onClick={handleSubmit}>
            Upload song
          </button>
          {isLoading ? <ProgressBar progress={progress} /> : null}
        </>
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
    </div>
  );
}

export default UploadTrackForm;

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// formik
import { Formik } from 'formik';
import { toast } from 'react-toastify';
// hooks
import { useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';
// components
import TrendingTrackItemSkeleton from '../../components/molecules/Skeletons/TrendingTrackItemSkeleton';
import PlaylistFormContainer from '../../components/molecules/PlaylistFormContainer/PlaylistFormContainer';
// import TrendingList from '../../components/organism/TrendingList/TrendingList';
// icons
import defaultPlaylist from '../../assets/img/defaultSong.png';
// styles
import './Playlist.scss';
import editPlaylist from '../../utils/api/apiPlaylist';
import Modal from '../../components/template/Modal/Modal';
import { createPlaylistSchema } from '../../utils/schemas';

function Playlist() {
  const { id } = useParams();
  const [playlist, isLoading, setPlaylist] = useFetchItems(`playlist/${id}`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // edit form values and state
  const [playlistImage, setPlaylistImage] = useState(null);

  const initialValues = {
    name: playlist.name,
    description: playlist.description,
    publicAccessible: playlist.publicAccessible
  };

  const handleEditPlaylist = async (values) => {
    const toastId = toast.loading('Editing playlist...');
    setIsModalOpen(false);
    try {
      const newPlaylist = await editPlaylist(
        {
          ...values,
          image: playlistImage
        },
        'PUT',
        playlist._id
      );
      console.log(newPlaylist);
      setPlaylist({ ...playlist, ...newPlaylist });
      toast.dismiss(toastId);
      toast.success('Playlist edited!');
    } catch (e) {
      toast.dismiss(toastId);
      toast.error('Failed to edit playlist, please, try again');
    }
  };

  return (
    <>
      <section className="playlistSectionContainer">
        <header className="playlistHeader">
          <div
            role="button"
            tabIndex={0}
            className="editableInformationWrapper"
            onClick={() => setIsModalOpen(true)}
          >
            <img src={playlist.thumbnail || defaultPlaylist} alt="playlist" />

            <div className="playlistInfoWrapper">
              <p>{playlist.description}</p>
              <h1 className="heading1 playlistName">{playlist.name}</h1>
            </div>
          </div>
        </header>

        {!isLoading ? <TrendingTrackItemSkeleton /> : null}
        {/* <TrendingList
          errorMessage="This playlist do not have tracks"
          tracks={playlist.tracks}
        /> */}
      </section>
      {!isLoading && isModalOpen ? (
        <Modal
          title="Edit your playlist"
          showing={isModalOpen}
          setShow={setIsModalOpen}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleEditPlaylist}
            validationSchema={createPlaylistSchema}
          >
            {({ errors, touched }) => (
              <PlaylistFormContainer
                handleChangeImage={setPlaylistImage}
                playlistImage={playlist.iamge}
                errors={errors}
                touched={touched}
              />
            )}
          </Formik>
        </Modal>
      ) : null}
    </>
  );
}

export default Playlist;

import React from 'react';

import './BecomeArtistForm.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../../redux/User/userSlice';
// import Button from '../../molecules/Button/Button';
import { updateUserProfile } from '../../../utils/api/apiUser';

import { ACCOUNT, APP } from '../../../routes';
// artist: false,

function BecomeArtistForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = async () => {
    const newArtistUser = await updateUserProfile(
      { artist: !user.artist },
      user.id
    );
    dispatch(setUser(newArtistUser));
  };
  return (
    <section className="ArtistSection">
      <h1 className="heading1">Become An Artist</h1>
      <p>
        Being an artist means that you will be able to upload your own songs.
      </p>
      <p>Become an artist in just one click</p>
      <div className="flexWrapper">
        <Link to={`${APP}${ACCOUNT}`} className="backButton">
          Back
        </Link>
        <button type="submit" onClick={handleSubmit}>
          {!user.artist ? 'Be Artist' : 'Cancel Suscription'}
        </button>
      </div>
    </section>
  );
}

export default BecomeArtistForm;

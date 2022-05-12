import React from 'react';
// router link
import { Link } from 'react-router-dom';
// styles
import './BecomeArtistForm.scss';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/User/userSlice';
// components
import Button from '../../molecules/Button/Button';
// utils
import { updateUserProfile } from '../../../utils/api/apiUser';
// routes
import { ACCOUNT, APP } from '../../../routes';

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
        <Button type="submit" handleClick={handleSubmit}>
          {!user.artist ? 'Be Artist' : 'Cancel Suscription'}
        </Button>
      </div>
    </section>
  );
}

export default BecomeArtistForm;

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../services/auth/auth';
import getGenresFromApi from '../../utils/api/apiGenre';

import './Genres.scss';

function Genres() {
  const currentUser = useAuth();
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) return;
    const fetch = async () => {
      try {
        const allGenres = await getGenresFromApi();
        setGenres(allGenres);
      } catch (e) {
        setError('Please try again later');
      }
    };
    fetch();
  }, [currentUser]);

  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1 className="heading1">Genres</h1>
      <div className="genresContainer">
        {genres &&
          genres.map((genre) => (
            <div key={genre._id} className="genreWrapper">
              <span className="genreName">{genre.name}</span>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Genres;

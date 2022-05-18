import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useAuth } from '../../services/auth/auth';
import getGenresFromApi from '../../utils/api/apiGenre';
import globalSearch from '../../utils/api/apiSearch';
// import debounceFunction from '../../utils/debounce';
import './Search.scss';

function Search() {
  const currentUser = useAuth();
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');

  console.log('search results >>>', searchResults);

  const updateQuery = (e) => setSearchQuery(e.target.value);
  const debouncedOnChange = debounce(updateQuery, 500);

  // fetch search results
  useEffect(() => {
    if (searchQuery === '') return;
    globalSearch(searchQuery).then((result) => setSearchResults(result));
  }, [searchQuery]);

  // fetch all genres
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
      <h1 className="heading1">Search</h1>
      <input type="search" onChange={debouncedOnChange} />
      {/* {results && <div>{results}</div>} */}
      {!searchResults && (
        <div className="genresContainer">
          {genres &&
            genres.map((genre) => (
              <Link
                to={`/app/search/${genre.name.toLowerCase()}`}
                key={genre._id}
              >
                <div className="genreWrapper">
                  <span className="genreName">{genre.name}</span>
                </div>
              </Link>
            ))}
        </div>
      )}
    </main>
  );
}

export default Search;

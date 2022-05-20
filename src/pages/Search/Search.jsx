import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useAuth } from '../../services/auth/auth';
import getGenresFromApi from '../../utils/api/getGenresFromApi';
import globalSearch from '../../utils/api/globalSearch';

import ArtistList from '../../components/organism/ArtistList/ArtistList';
import TrendingList from '../../components/organism/TrendingList/TrendingList';
import './Search.scss';
import PlaylistsList from '../../components/organism/PlaylistsList/PlaylistsList';

function Search() {
  const currentUser = useAuth();
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  // search query and debounced function
  const updateQuery = (e) => setSearchQuery(e.target.value);
  const debouncedOnChange = debounce(updateQuery, 500);

  // fetch search results
  useEffect(() => {
    if (searchQuery.length < 3) return;
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
    <main className="searchMainContainer">
      <h1 className="heading1">Search</h1>
      <input
        type="search"
        onChange={debouncedOnChange}
        className="searhBar"
        placeholder="Artist, Track, Playlist..."
      />
      {(!searchResults || searchQuery === '') && (
        <div className="genresContainer">
          {genres &&
            genres.map((genre) => (
              <Link to={`/app/genre/${genre._id}`} key={genre._id}>
                <div className="genreWrapper">
                  <span className="genreName">{genre.name}</span>
                </div>
              </Link>
            ))}
        </div>
      )}
      {searchResults && searchQuery !== '' && (
        <>
          {searchResults?.users.length > 0 && (
            <>
              <h2 className="heading2">Users</h2>
              <ArtistList artists={searchResults.users} />
            </>
          )}
          {searchResults?.tracks.length > 0 && (
            <>
              <h2 className="heading2">Songs</h2>
              <TrendingList tracks={searchResults.tracks} />
            </>
          )}
          {searchResults?.playlists.length > 0 && (
            <>
              <h2 className="heading2">Playlist</h2>
              <div className="searchPlaylistWrapper">
                <PlaylistsList playlists={searchResults.playlists} />
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default Search;

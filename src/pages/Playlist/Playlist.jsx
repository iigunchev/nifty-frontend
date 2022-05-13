import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';

function Playlist() {
  const { id } = useParams();
  const [playlist, isLoading] = useFetchItems(`playlist/${id}`);
  console.log(playlist);
  return (
    <div>
      <h1>{playlist.name}</h1>
    </div>
  );
}

export default Playlist;

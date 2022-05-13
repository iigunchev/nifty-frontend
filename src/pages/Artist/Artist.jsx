import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';

function Artist() {
  const { id } = useParams();
  const [artist, isLoading] = useFetchItems(`account/${id}`);
  console.log(artist);
  return (
    <div>
      <h1>{artist.name}</h1>
    </div>
  );
}

export default Artist;

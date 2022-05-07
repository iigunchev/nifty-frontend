// states
import { useEffect, useState } from 'react';
// redux
import { useSelector } from 'react-redux';
// toast
import { toast } from 'react-toastify';
// utils
import { getTracks } from '../utils/api/apiTrack';

const useFetchTracks = (endpoint = 'tracks') => {
  const [songs, setSongs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const apiTracks = await getTracks(`/${endpoint}`, token);
        setSongs(apiTracks);
      } catch (e) {
        toast.error('Failed to fetch tracks');
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);
  return [songs, isLoading];
};

export default useFetchTracks;

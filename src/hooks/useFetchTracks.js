// states
import { useEffect, useState } from 'react';

// toast
import { toast } from 'react-toastify';
import { useAuth } from '../services/auth/auth';
// utils
import { getTracks } from '../utils/api/apiTrack';

const useFetchTracks = (endpoint = 'tracks') => {
  const currentUser = useAuth();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const apiTracks = await getTracks(`/${endpoint}`);
        setSongs(apiTracks);
      } catch (e) {
        toast.error('Failed to fetch tracks');
      } finally {
        setIsLoading(false);
      }
    };
    if (!currentUser) return;
    fetch();
  }, [currentUser]);
  return [songs, isLoading];
};

export default useFetchTracks;

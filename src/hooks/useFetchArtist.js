// states
import { useEffect, useState } from 'react';

// toast
import { toast } from 'react-toastify';
import { useAuth } from '../services/auth/auth';
// utils
import { getTracks } from '../utils/api/apiTrack';

const useFetchArtist = (endpoint = 'artist') => {
  const currentUser = useAuth();
  const [artists, setArtist] = useState([]);
  const [isLoadingArtist, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const apiArtists = await getTracks(`/${endpoint}`);
        setArtist(apiArtists);
      } catch (e) {
        toast.error('Failed to fetch artists');
      } finally {
        setIsLoading(false);
      }
    };
    if (!currentUser) return;
    fetch();
  }, [currentUser]);
  return [artists, isLoadingArtist];
};

export default useFetchArtist;

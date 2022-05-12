// states
import { useEffect, useState } from 'react';

// toast
import { toast } from 'react-toastify';
import { useAuth } from '../services/auth/auth';
// utils
import { getTracks } from '../utils/api/apiTrack';

const useFetchArtist = (endpoint = 'artists') => {
  const currentUser = useAuth();
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const apiArtists = await getTracks(`/${endpoint}`);

        setArtists(apiArtists);
      } catch (e) {
        toast.error('Failed to fetch artists');
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (!currentUser) return;
    fetch();
  }, [currentUser]);
  return [artists, isLoading];
};

export default useFetchArtist;

// states
import { useEffect, useState } from 'react';

// toast
import { toast } from 'react-toastify';
import { getCurrentUserToken, useAuth } from '../services/auth/auth';
// utils
import fetchApi from '../utils/api/fetchApi';

const useFetchItems = (endpoint = 'tracks') => {
  const currentUser = useAuth();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const token = await getCurrentUserToken();
        const apiElements = await fetchApi(`/${endpoint}`, `Bearer ${token}`);
        setItems(apiElements);
      } catch (e) {
        toast.error('Failed to fetch tracks');
      } finally {
        setIsLoading(false);
      }
    };
    if (!currentUser) return;
    fetch();
  }, [currentUser]);
  return [items, isLoading, setItems];
};

export default useFetchItems;

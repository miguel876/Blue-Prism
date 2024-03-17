import { useState, useEffect } from 'react';
import api from 'utils/config';

type ApiResponse<T> = {
  data: T | null;
  isError: Error | null;
  isLoading: boolean;
  refetch?: () => void;
};

const useQuery = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(null);
    setData(null);

    try {
      const response = await fetch(`${api.baseApi}/${url}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setIsError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, isError, isLoading, refetch };
};

export default useQuery;

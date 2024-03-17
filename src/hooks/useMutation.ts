import { useState } from 'react';
import api from 'utils/config.json';

type HttpMethod = 'POST' | 'PUT' | 'DELETE';

type ApiResponse<T> = {
  data: T | null;
  isError: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
};

const useMutation = <T>(method: HttpMethod = 'POST'): [any, ApiResponse<T>] => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    isError: null,
    isLoading: false,
    isSuccess: false,
  });

  const mutate = async (url: string, requestData: T) => {
    setResponse({
      data: null,
      isError: null,
      isLoading: true,
      isSuccess: false,
    });
    try {
      const response = await fetch(`${api.baseApi}/${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setResponse({
        data: responseData,
        isError: null,
        isLoading: false,
        isSuccess: true,
      });
    } catch (error) {
      setResponse({
        data: null,
        isError: error as Error,
        isLoading: false,
        isSuccess: false,
      });
    }
  };

  return [mutate, response];
};

export default useMutation;

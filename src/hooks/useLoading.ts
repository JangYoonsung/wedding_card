import { useState } from 'react';

const useLoading = <T>(
  fn: (...args: any[]) => Promise<T>,
): [boolean, (...args: any[]) => Promise<T>] => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (...args: any[]) => {
    setLoading(true);
    return await fn(...args).finally(() => setLoading(false));
  };

  return [isLoading, handleSubmit];
};

export default useLoading;

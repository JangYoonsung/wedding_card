import { useState } from 'react';

const useLoading = <T>(
  fn: (...args: unknown[]) => Promise<T>,
): [boolean, (...args: unknown[]) => Promise<T>] => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (...args: unknown[]) => {
    setLoading(true);
    return await fn(...args).finally(() => setLoading(false));
  };

  return [isLoading, handleSubmit];
};

export default useLoading;

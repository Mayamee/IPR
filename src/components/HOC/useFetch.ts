import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    let isMounted = false;
    const abort = new AbortController();
    const fetchData = async () => {
      isMounted = true;
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: abort.signal, ...options });
        const data = (await response.json()) as T;
        setError("");
        if (isMounted) {
          setData(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
      abort.abort();
    };
  }, [url, options]);

  return { data, isLoading, error };
};

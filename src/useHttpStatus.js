import useSWR from "swr";

export const useHttpStatus = () => {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    httpStatus: data,
    isLoading,
    isError: error,
  };
};

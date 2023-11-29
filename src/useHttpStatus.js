import useSWR from "swr";

export const useHttpStatus = () => {
  const headers = { Accept: "application/json" };
  const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR("https://httpstat.us/200", fetcher);

  return {
    httpStatus: data,
    isLoading,
    isError: error,
  };
};

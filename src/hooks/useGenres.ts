import { useQuery } from '@tanstack/react-query';
import genres from "../data/genres";
import Genre from '../entities/Genre';
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: genres,
});

export default useGenres;
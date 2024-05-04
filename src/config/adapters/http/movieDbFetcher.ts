import {MOVIE_DB_TOKEN_KEY} from '@env';
import {AxiosAdapter} from './axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: MOVIE_DB_TOKEN_KEY ?? 'no-key',
    language: 'es',
  },
});

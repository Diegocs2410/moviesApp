import {AxiosAdapter} from './axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '087cf33390e17cbdb9c605a562ad7084',
    language: 'es',
  },
});

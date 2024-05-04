import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import singleMovieMapper from '../../../infrastructure/interfaces/mappers/single-movie.mapper';
import {MovieResponse} from '../../../infrastructure/interfaces/movie-db.response';
import type {FullMovie} from '../../entities/movie.entity';

export const getFullMovieUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const singleMovie = await fetcher.get<MovieResponse>(`/${movieId}`);
    return singleMovieMapper(singleMovie);
  } catch (error) {
    console.log('🚀 ~ error:', error);
    throw new Error('Something went wrong - Popular');
  }
};

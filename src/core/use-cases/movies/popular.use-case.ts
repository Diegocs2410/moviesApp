import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import movieMapper from '../../../infrastructure/interfaces/mappers/movie.mapper';
import {PopularResponse} from '../../../infrastructure/interfaces/movie-db.response';
import type {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<PopularResponse>('/popular');
    return upcoming.results.map(movieMapper);
  } catch (error) {
    console.log('🚀 ~ error:', error);
    throw new Error('Something went wrong - Popular');
  }
};

import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import movieMapper from '../../../infrastructure/interfaces/mappers/movie.mapper';
import {UpComingResponse} from '../../../infrastructure/interfaces/movie-db.response';
import type {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpComingResponse>('/upcoming');
    return upcoming.results.map(movieMapper);
  } catch (error) {
    console.log('🚀 ~ error:', error);
    throw new Error('Something went wrong - upComing');
  }
};

import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import movieMapper from '../../../infrastructure/interfaces/mappers/movie.mapper';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.response';
import type {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    return nowPlaying.results.map(movieMapper);
  } catch (error) {
    console.log('🚀 ~ error:', error);
    throw new Error('Something went wrong - NowPlaying');
  }
};

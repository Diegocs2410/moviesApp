import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {CastMapper} from '../../../infrastructure/interfaces/mappers/cast.mapper';
import {CreditsResponse} from '../../../infrastructure/interfaces/movie-db.response';
import {Cast} from '../../entities/cast.entity';

export const getCastMovieUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<CreditsResponse>(`/${movieId}/credits`);
    const actors = cast.map(CastMapper.fromMovieDBToCast);
    return actors;
  } catch (error) {
    throw new Error('Cannot get Movie cast ');
  }
};

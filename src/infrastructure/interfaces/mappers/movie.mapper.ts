import type {Movie} from '../../../core/entities/movie.entity';
import type {Result} from '../movie-db.response';

const tmdbPath = 'https://image.tmdb.org/t/p/w500';

export default (result: Result): Movie => ({
  id: result.id,
  backdrop: `${tmdbPath}${result.backdrop_path}`,
  description: result.overview,
  poster: `${tmdbPath}${result.poster_path}`,
  rating: result.vote_average,
  releaseDate: result.release_date,
  title: result.title,
});

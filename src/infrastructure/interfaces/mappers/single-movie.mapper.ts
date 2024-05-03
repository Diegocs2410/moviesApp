import type {FullMovie} from '../../../core/entities/movie.entity';
import type {MovieResponse} from '../movie-db.response';

const tmdbPath = 'https://image.tmdb.org/t/p/w500';

export default (result: MovieResponse): FullMovie => ({
  id: result.id,
  backdrop: `${tmdbPath}${result.backdrop_path}`,
  description: result.overview,
  poster: `${tmdbPath}${result.poster_path}`,
  rating: result.vote_average,
  releaseDate: result.release_date,
  title: result.title,
  genres: result.genres.map(g => g.name),
  duration: result.runtime,
  budget: result.budget,
  originalTitle: result.original_title,
  productionCompanies: result.production_companies,
});

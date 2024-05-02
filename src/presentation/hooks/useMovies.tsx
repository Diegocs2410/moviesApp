import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import {movieDBFetcher} from '../../config/adapters/http/movieDbFetcher';
import {
  moviesNowPlayingUseCase,
  moviesPopularUseCase,
  moviesTopRatedUseCase,
  moviesUpcomingUseCase,
} from '../../core/use-cases';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    const promises = [
      moviesNowPlayingUseCase(movieDBFetcher),
      moviesPopularUseCase(movieDBFetcher),
      moviesTopRatedUseCase(movieDBFetcher),
      moviesUpcomingUseCase(movieDBFetcher),
    ];
    const [nowPlayingMovies, popularM, topRatedM, upComingM] =
      await Promise.all(promises);

    setNowPlaying(nowPlayingMovies);
    setPopularMovies(popularM);
    setTopRatedMovies(topRatedM);
    setUpComingMovies(upComingM);

    setIsLoading(false);
  };

  return {
    nowPlaying,
    upComingMovies,
    topRatedMovies,
    popularMovies,
    isLoading,
  };
};

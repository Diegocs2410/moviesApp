import {useEffect, useState} from 'react';
import {FullMovie} from '../../core/entities/movie.entity';
import {getFullMovieUseCase} from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/http/movieDbFetcher';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setIsLoading(true);
        const fullMovieDetails = await getFullMovieUseCase(
          movieDBFetcher,
          movieId,
        );
        setMovie(fullMovieDetails);
      } catch (error) {
        throw new Error('Something went Wrong');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovie();
  }, [movieId]);

  return {
    movie,
    isLoading,
  };
};

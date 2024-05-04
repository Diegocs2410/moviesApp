import {useEffect, useState} from 'react';
import {FullMovie} from '../../core/entities/movie.entity';
import {getCastMovieUseCase, getFullMovieUseCase} from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/http/movieDbFetcher';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [castCredits, setCastCredits] = useState<Cast[]>([]);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setIsLoading(true);

        const [fullMovieDetails, castCreditsRes] = await Promise.all([
          getFullMovieUseCase(movieDBFetcher, movieId),
          getCastMovieUseCase(movieDBFetcher, movieId),
        ]);
        setMovie(fullMovieDetails);
        setCastCredits(castCreditsRes);
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
    castCredits,
  };
};

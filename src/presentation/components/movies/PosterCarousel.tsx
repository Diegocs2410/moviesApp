import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Movie} from '../../../core/entities/movie.entity';
import MoviePoster from './MoviePoster';
import {SafeAreaView} from 'react-native-safe-area-context';

interface PosterCarouselPropsType {
  movies: Movie[];
  height?: number;
}

const PosterCarousel = (props: PosterCarouselPropsType) => {
  const {height = 440, movies} = props;
  return (
    <SafeAreaView>
      <View style={{height}}>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          {movies.map(m => (
            <MoviePoster key={m.id} movie={m} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PosterCarousel;

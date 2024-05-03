import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import {useMovies} from '../../hooks/useMovies';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popularMovies, topRatedMovies, upComingMovies} =
    useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View
          style={{
            marginTop: top + 20,
            paddingBottom: 30,
          }}>
          <PosterCarousel movies={nowPlaying} />

          {/* populares */}
          <HorizontalCarousel movies={popularMovies} title="Populares" />
          {/* Top Rated */}
          <HorizontalCarousel movies={topRatedMovies} title="Top Rated" />
          {/* Up coming  */}
          <HorizontalCarousel movies={upComingMovies} title="Up Coming" />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

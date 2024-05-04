import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import {useMovies} from '../../hooks/useMovies';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import FullLoaderScreen from '../../components/loaders/FullLoaderScreen';

export const HomeScreen = () => {
  const {
    isLoading,
    nowPlaying,
    popularMovies,
    topRatedMovies,
    upComingMovies,
    popularNextPage,
  } = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <FullLoaderScreen />;
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
          <HorizontalCarousel
            movies={popularMovies}
            title="Populares"
            loadNextPage={popularNextPage}
          />
          {/* Top Rated */}
          <HorizontalCarousel movies={topRatedMovies} title="Top Rated" />
          {/* Up coming  */}
          <HorizontalCarousel movies={upComingMovies} title="Up Coming" />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

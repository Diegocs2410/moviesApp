import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import {useMovies} from '../../hooks/useMovies';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const {isLoading, nowPlaying} = useMovies();
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
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

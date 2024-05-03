import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/Navigation';

interface MoviePosterPropsType {
  movie: Movie;
  width?: number;
  height?: number;
}

const MoviePoster = ({
  movie,
  height = 400,
  width = 300,
}: MoviePosterPropsType) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      style={({pressed}) => ({
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
        width,
        height,
        opacity: pressed ? 0.9 : 1,
      })}
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: movie.poster,
          }}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    width: 300,
    height: 400,
    borderRadius: 18,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});

export default MoviePoster;
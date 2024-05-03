// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import Header from '../../components/movie/Header';

interface PropsI extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = (props: PropsI) => {
  const {
    route: {
      params: {movieId},
    },
  } = props;
  // const {movieId} = useRoute().params; // Otra manera

  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  console.log('🚀 ~ DetailsScreen ~ movie:', movie);

  return (
    <View>
      <Header movie={movie!} />
    </View>
  );
};

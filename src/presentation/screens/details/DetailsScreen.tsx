// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';

interface PropsI extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = (props: PropsI) => {
  const {
    route: {
      params: {movieId},
    },
  } = props;
  // const {movieId} = useRoute().params; // Otra manera

  const {isLoading, movie} = useMovie(movieId);
  console.log('🚀 ~ DetailsScreen ~ movie:', movie);

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

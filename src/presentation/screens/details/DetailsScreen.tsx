// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import Header from '../../components/movie/Header';
import Details from '../../components/movie/Details';
import {ScrollView} from 'react-native-gesture-handler';

interface PropsI extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = (props: PropsI) => {
  const {
    route: {
      params: {movieId},
    },
  } = props;
  // const {movieId} = useRoute().params; // Otra manera

  const {isLoading, movie, castCredits} = useMovie(movieId);

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Header movie={movie!} />
      <Details movie={movie!} cast={castCredits} />
    </ScrollView>
  );
};

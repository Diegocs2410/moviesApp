// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import FullLoaderScreen from '../../components/loaders/FullLoaderScreen';
import Details from '../../components/movie/Details';
import Header from '../../components/movie/Header';
import {useMovie} from '../../hooks/useMovie';
import {RootStackParams} from '../../navigation/Navigation';

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
    return <FullLoaderScreen />;
  }

  return (
    <ScrollView>
      <Header movie={movie!} />
      <Details movie={movie!} cast={castCredits} />
    </ScrollView>
  );
};

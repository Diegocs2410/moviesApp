import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './presentation/screens/home/HomeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

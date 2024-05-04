import {ActivityIndicator, View} from 'react-native';

export default function FullLoaderScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator size="large" color={'indigo'} />
    </View>
  );
}

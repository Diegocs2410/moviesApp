import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  cast: Cast;
}

export default function CastActor({cast: {name, avatar, character}}: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: avatar}} />
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{name}</Text>
        <Text style={styles.character}>{character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 12,
    opacity: 0.7,
  },
});

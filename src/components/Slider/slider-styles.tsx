import {StyleSheet} from 'react-native';
import {HANDLE_WIDTH} from './slider';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 80,
    height: 50,
    width: '80%',
    backgroundColor: 'rgb(192,192,192)',
    borderRadius: 10,
  },
  handle: {
    width: HANDLE_WIDTH,
    backgroundColor: 'rgb(30,144,255)',
    borderRadius: 10,
    position: 'absolute',
    bottom: -20,
    top: -20,
  },
});

export default styles;

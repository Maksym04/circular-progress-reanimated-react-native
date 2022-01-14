import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Slider from './src/components/Slider/slider';

const App = () => {
  const sliderWidth = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);

  return (
    <View style={styles.container}>
      <Slider sliderWidth={sliderWidth} progress={progress} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

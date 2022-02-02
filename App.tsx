import React from 'react';
import {StyleSheet, View} from 'react-native';
import SliderHoc from './src/HOC/slider-hoc';

const App = () => {
  return (
    <View style={styles.container}>
      <SliderHoc />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

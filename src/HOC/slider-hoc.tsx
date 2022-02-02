import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Slider from '../components/Slider/slider';

const SliderHoc = gestureHandlerRootHOC(() => <Slider />);

export default SliderHoc;

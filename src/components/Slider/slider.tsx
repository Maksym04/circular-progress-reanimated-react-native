import React, {useCallback} from 'react';
import {View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import CircularProgres from '../CircularProgress/circular-progres';
import styles from './slider-styles';

interface SliderProps {
  sliderWidth: SharedValue<number>;
  progress: SharedValue<number>;
}

export const HANDLE_WIDTH = 20;

const Slider: React.FC<SliderProps> = ({sliderWidth, progress}) => {
  const animatedHandleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: progress.value - HANDLE_WIDTH / 2}],
    };
  });

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startProgress: number}
  >({
    onStart: (_, ctx) => {
      ctx.startProgress = progress.value;
    },
    onActive: (event, ctx) => {
      progress.value = ctx.startProgress + event.translationX;
    },
    onEnd: () => {
      if (progress.value > sliderWidth.value) {
        progress.value = withSpring(sliderWidth.value);
      } else if (progress.value < 0) {
        progress.value = withSpring(0);
      }
    },
  });

  const onLayout = useCallback(
    e => {
      sliderWidth.value = e.nativeEvent.layout.width;
    },
    [sliderWidth],
  );

  return (
    <View style={styles.mainContainer}>
      <CircularProgres sliderWidth={sliderWidth} progress={progress} />
      <View style={styles.container} onLayout={onLayout}>
        <PanGestureHandler onGestureEvent={panGestureHandler}>
          <Animated.View style={[styles.handle, animatedHandleStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default Slider;

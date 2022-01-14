import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './input-progress-styles';

interface InputProgressProps {
  animatedInputProps: Partial<{
    text: string;
    color: string | number;
  }>;
}

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const InputProgress: React.FC<InputProgressProps> = ({animatedInputProps}) => {
  return (
    <AnimatedInput
      editable={false}
      defaultValue="0"
      style={[StyleSheet.absoluteFill, styles.container]}
      animatedProps={animatedInputProps}
    />
  );
};

export default InputProgress;

import React from 'react';
import {View} from 'react-native';
import {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import {CIRCUMFERENCE} from '../../constants/constants';
import {clamp} from '../../utils/clamp';
import InputProgress from '../InputProgress/input-progress';
import Cycle from './../Cycle/cycle';
import styles from './circular-progress-styles';

interface CircularProgresProps {
  sliderWidth: SharedValue<number>;
  progress: SharedValue<number>;
}

const CircularProgres: React.FC<CircularProgresProps> = ({
  sliderWidth,
  progress,
}) => {
  /**
   * Анимированные пропсы для анимированного компонента AnimatedCircle
   */
  const animatedBgProps = useAnimatedProps(() => {
    const percentComplete = clamp(progress.value / sliderWidth.value, 0, 1);

    return {
      fillOpacity: interpolate(percentComplete, [0, 1], [0.2, 0.75]),
    };
  });

  const animatedProgressProps = useAnimatedProps(() => {
    const percentComplete = clamp(progress.value / sliderWidth.value, 0, 1);

    return {
      // Свойство, чтобы обводка круга рисовала периметр круга
      strokeDashoffset: (1 - percentComplete) * CIRCUMFERENCE,
    };
  });

  /**
   * Анимированный пропс для анимированного компонента AnimatedInput
   */
  const animatedInputProps = useAnimatedProps(() => {
    const percentComplete = clamp(progress.value / sliderWidth.value, 0, 1);

    return {
      // Анимируемые свойства текста и цвета на основе процентов
      text: `${Math.round(100 * percentComplete)} %`,
      color: interpolateColor(
        percentComplete,
        [0, 0.5, 1],
        ['red', 'yellow', 'green'],
      ),
    };
  });

  return (
    <View>
      <View style={styles.container}>
        <Cycle
          animatedProgressProps={animatedProgressProps}
          animatedBgProps={animatedBgProps}
        />
        <InputProgress animatedInputProps={animatedInputProps} />
      </View>
    </View>
  );
};

export default CircularProgres;

import React from 'react';
import Animated from 'react-native-reanimated';
import {Svg, Circle, G} from 'react-native-svg';
import {
  CIRCUMFERENCE,
  HALF_WIDTH,
  radius,
  STROKE_WIDTH,
} from '../../constants/constants';

interface CircleProps {
  animatedProgressProps: Partial<{
    strokeDashoffset: number;
  }>;
  animatedBgProps: Partial<{
    fillOpacity: number;
  }>;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Cycle: React.FC<CircleProps> = ({
  animatedProgressProps,
  animatedBgProps,
}) => {
  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`${-HALF_WIDTH} ${-HALF_WIDTH} ${2 * HALF_WIDTH} ${
        2 * HALF_WIDTH
      }`}>
      <G rotation="-90">
        <AnimatedCircle
          cx={0}
          cy={0}
          r={radius}
          // Заполнение
          fill="transparent"
          strokeWidth={STROKE_WIDTH}
          // Штрих органичительной линии
          strokeLinecap="round"
          // Штрих массива тире
          strokeDasharray={CIRCUMFERENCE}
          animatedProps={animatedProgressProps}
          stroke={'blue'}
        />
        <AnimatedCircle
          cx={0}
          cy={0}
          r={radius}
          stroke="rgb(180,180,180)"
          strokeWidth={2}
          // Штрих линейного соеднинения
          strokeLinejoin="round"
          strokeOpacity="0.1"
          animatedProps={animatedBgProps}
          fill={'black'}
        />
      </G>
    </Svg>
  );
};

export default Cycle;

import React, { FC } from 'react';
import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  Oval,
  Paint,
  RadialGradient,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import { COLORS, screenHeight, screenWidth } from './shared/utils/COLORS';

interface Props {}

const SkiaDrawings: FC<Props> = props => {
  const center = vec(screenWidth / 2, screenHeight / 2);

  const rct = {
    x: screenWidth / 10,
    y: screenHeight / 2.3,
    width: screenWidth - 100,
    height: 120,
  };
  return (
    <Canvas style={{ flex: 1 }}>
      <Paint>
        <RadialGradient
          c={vec(screenWidth / 2 + 25, screenHeight / 2)}
          r={40}
          colors={[COLORS.submitColor, COLORS.inValidSubmitColor]}
        />
        <Circle c={center} r={18} />
      </Paint>
      <Paint style="stroke" strokeWidth={16}>
        <SweepGradient
          c={center}
          colors={[COLORS.blue, COLORS.inValidSubmitColor, COLORS.blue]}
        />
        <BlurMask blur={10} style="inner" />
        <Group>
          <Oval rect={rct} />
          <Group
            transform={[{ rotate: Math.PI / 3 }, { scale: -1 }]}
            origin={center}
          >
            <Oval rect={rct} />
          </Group>
          <Group
            transform={[{ rotate: -Math.PI / 3 }, { scale: -1 }]}
            origin={center}
          >
            <Oval rect={rct} />
          </Group>
        </Group>
      </Paint>
    </Canvas>
  );
};

export default SkiaDrawings;

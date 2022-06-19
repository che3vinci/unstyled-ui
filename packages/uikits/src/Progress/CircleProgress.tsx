import { GradientStop } from '@c3/utils';
import React from 'react';
import { Box } from '..';
import { BaseProps } from '../Common';

export type CircleProgressProps = BaseProps & {
  progress: number;
  bgColor: string;
  strokeColor?: GradientStop[];
};

export const CircleProgress: React.FC<CircleProgressProps> = props => {
  const {
    bgColor,
    progress,
    width,
    strokeWidth,
    strokeColor = [],

    ...restProps
  } = props;
  const _width = +(width || 100);
  const _height = _width;
  const _strokeWidth = +(strokeWidth || 1);
  const radius = (_width - _strokeWidth * 2) / 2;
  const centerX = _width / 2;
  const centerY = centerX;

  const length = 2 * Math.PI * radius;
  return (
    <Box {...restProps} width={width} height={width}>
      <svg
        viewBox={`0 0 ${_width} ${_height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="myGradient">
            {strokeColor.map((e: GradientStop) => (
              <stop offset={e.offset} stopColor={e.stopColor} key={e.offset} />
            ))}
          </linearGradient>
        </defs>
        <circle
          className="outer-progress-circle"
          stroke={bgColor}
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={_strokeWidth}
          fill="transparent"
        />
        <circle
          className="inner-progress-circle"
          stroke="url(#myGradient)"
          strokeWidth={_strokeWidth}
          fill="transparent"
          cx="50%"
          cy="50%"
          r={radius}
          strokeDasharray={`${length * progress}, ${length * (1 - progress)}`}
          transform={`rotate(270,${centerX},${centerY})`}
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
};

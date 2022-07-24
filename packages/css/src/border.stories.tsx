import React from 'react';
import { gradientBorder, gradientRoundedBorder } from './border';
import { Box } from '@unstyled-ui/layout';
export default {
  title: 'css/border',
  componet: () => <div></div>,
};
const linear = 'linear-gradient(to right, green, red)';

const gradientRoundBorder = gradientRoundedBorder('#164E85', linear);
export const borderWithGraidentAndRadius = () => (
  <div
    style={{
      width: 100,
      height: 100,
      ...gradientRoundBorder,
    }}
  ></div>
);
export const borderWithGraident = () => (
  <div
    style={{
      ...gradientBorder(linear),
      width: 100,
      height: 100,
    }}
  ></div>
);
export const gradientBorderx2 = () => (
  <div
    style={{
      border: '8px solid #0000',
      borderRadius: '10px',
      background: `
    linear-gradient(red,blue) padding-box,
    linear-gradient(green,pink) border-box`,
      width: '100px',
      height: '100px',
    }}
  ></div>
);
export const gradientBorderx3 = () => (
  <Box
    css={{
      _before: {
        content: '',
        position: 'absolute',
        inset: 0,
        borderRadius: '50px',
        padding: '10px',
        background: 'linear-gradient(45deg,red,blue)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        MaskComposite: 'exclude',
      },
    }}
  ></Box>
);

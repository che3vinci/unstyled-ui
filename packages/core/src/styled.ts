import { createStitches } from '@unstyled-ui/stitches';
import { config } from './configure';
const stiches = createStitches(config);

export const { styled, keyframes, globalCss, createTheme, css } = stiches;

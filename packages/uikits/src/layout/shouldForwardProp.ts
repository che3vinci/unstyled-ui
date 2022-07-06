import {
  componentStatus,
  cssPropList,
  shortCutMap,
  supportedPseEles,
} from '@styless/css';
import { keys } from '@c3/utils';
import type { StyledConfig } from 'styled-components';

export const forwardBlackList = [
  'css',
  'round',
  'width',
  'height',
  'fx',
  'fy',
  'gap',
  'ar',
  'hovered',
  '_typo',
]
  .concat(cssPropList)
  .concat([
    'cellHeight',
    'cellWidth',
    'isMobile',
    'dbg',
    'isLogined',
    'load',
    'maxPageNo',
  ])
  .concat(keys(shortCutMap))
  .concat(componentStatus)
  .concat(keys(supportedPseEles));

export const notInBlackList = (prop: string) =>
  !forwardBlackList.includes(prop);

export const shouldForwardProp: StyledConfig['shouldForwardProp'] = props =>
  notInBlackList(props);

export const getStyledConfig = (componentId: string): StyledConfig => ({
  componentId: componentId,
  shouldForwardProp,
});

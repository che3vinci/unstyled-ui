import { ResponsiveInputValueType } from '../responsive';
import { CSSProperties } from './../responsive/type';

export interface IYPosition {
  top?: ResponsiveInputValueType;
  bottom?: ResponsiveInputValueType;
}
export interface IXPosition {
  left?: ResponsiveInputValueType;
  right?: ResponsiveInputValueType;
}
export type IAbsPosition = 'fixed' | 'absolute';

export interface IPosition extends IXPosition, IYPosition {}

export const xCenter = (position: IAbsPosition) => (ypos?: IYPosition) => {
  return {
    top: ypos?.top,
    bottom: ypos?.bottom,
    left: '50%',
    position,
    transform: 'translateX(-50%)',
  };
};
export const yCenter = (postion: IAbsPosition) => (xpos?: IXPosition) => {
  return {
    left: xpos?.left,
    right: xpos?.right,
    position: postion,
    top: '50%',
    transform: 'translateY(-50%)',
  };
};
export const xyCenter = (position: IAbsPosition) => () => {
  return {
    position,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%) ',
  };
};

export const absXCenter = xCenter('absolute');

export const absYCenter = yCenter('absolute');

export const absXYCenter = xyCenter('absolute');

export const abs = ({ left, top, right, bottom }: IPosition) => {
  return { position: 'absolute', left, right, top, bottom };
};

export const leftTopCorner: CSSProperties = {
  left: 0,
  top: 0,
};

export const rightTopCorner: CSSProperties = {
  top: 0,
  right: 0,
};

export const rightBottomCorner: CSSProperties = {
  bottom: 0,
  right: 0,
};

export const leftBottomCorner: CSSProperties = {
  bottom: 0,
  left: 0,
};

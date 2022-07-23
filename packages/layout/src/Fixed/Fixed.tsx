import React, { ForwardRefRenderFunction } from 'react';
import ReactDOM from 'react-dom';
import { BaseProps } from '@unstyled-ui/core';
import { Box } from '../Box';

export type IFixedProps = BaseProps;

const _Fixed: ForwardRefRenderFunction<HTMLDivElement, IFixedProps> = (
  props,
  ref
) => {
  const { css = {}, ...restProps } = props;
  return ReactDOM.createPortal(
    //@ts-ignore
    <Box css={{ position: 'fixed', ...css }} {...restProps} ref={ref} />,
    document.body
  );
};
export const Fixed = React.forwardRef(_Fixed);

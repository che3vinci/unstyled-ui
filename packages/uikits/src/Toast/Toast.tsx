import { removeNode } from '@c3/dom';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Row, fixedXCenter, IPosition } from '@unstyled-ui/layout';

export type ToastProps = Omit<BaseProps, 'content'> & {
  pos?: IPosition;
  duration?: number;
};

export const Toast: React.FC<ToastProps> = props => {
  const {
    pos,
    children,
    duration = 1000 * 1500, //5s
    className,
    ...restProps
  } = props;

  const ref = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      ref.current && removeNode(ref.current);
    }, duration * 2);
  }, [duration]);
  return (
    <Row
      css={{
        fx: 'center',
        gap: 0.5,
        zIndex: 100,
        ...fixedXCenter({ top: 110 }),
        ...pos,
      }}
      ref={ref}
      className={classNames('uu-toast', className)}
      {...restProps}
    >
      {children}
    </Row>
  );
};

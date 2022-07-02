import { fixedXCenter, IPosition } from '@c3/css';
import { removeNode } from '@c3/dom';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { BaseProps } from '../Common';
import { Row } from '../layout';

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
      fx="center"
      ref={ref}
      gap="0.5em"
      className={classNames('c3-toast', className)}
      zIndex="100"
      {...fixedXCenter({ top: 110 })}
      {...pos}
      {...restProps}
    >
      {children}
    </Row>
  );
};

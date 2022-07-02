import { absXCenter, ResponsiveInputValueType } from '@c3/css';
import { getBoxInPage } from '@c3/dom';
import { Direction, getAntiDirectin, IBox } from '@c3/utils';
import React, { useEffect, useRef, useState } from 'react';
import { BaseProps } from '../Common/types';
import { Arrow } from '../index';
import { Abs, Col, Relative } from '../layout';

export type IToolTipProps = BaseProps & {
  placement?: Direction;
  title: React.ReactNode;
  arrow: BaseProps;
};
export const ToolTip: React.FC<IToolTipProps> = ({
  placement = 'top',
  children,
  title,
  backgroundColor,
  arrow,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const arrowDirection = getAntiDirectin(placement);
  const [box, setBox] = useState({} as IBox<ResponsiveInputValueType>);
  useEffect(() => {
    if (ref.current) {
      setBox(getBoxInPage(ref.current));
    }
  }, [setBox]);
  return (
    <Relative
      test-id="c3-tooltip-container"
      {...props}
      display="flex"
      ref={ref}
    >
      <Abs test-id="tooltip" {...absXCenter({ bottom: `_${box.height}px` })}>
        <Col>
          {title}
          <Arrow
            directionx={arrowDirection}
            backgroundColor={backgroundColor}
            {...arrow}
          />
        </Col>
      </Abs>
      {children}
    </Relative>
  );
};

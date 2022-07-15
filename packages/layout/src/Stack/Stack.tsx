import React from 'react';
import { Relative } from '../Relative';
import { BaseProps, RCSSProperties } from '@unstyled-ui/core';
import classnames from 'classnames';

export type StackProps = {
  width: RCSSProperties['width'];
  height: RCSSProperties['height'];
} & BaseProps;

export const Stack: React.FC<StackProps> = props => {
  const { width, height, css = {}, children, className, ...restProps } = props;

  return (
    //@ts-ignore
    <Relative
      //@ts-ignore
      css={{ width, height, overflow: 'hidden', ...css }}
      className={classnames(className, 'uu-stack')}
      {...restProps}
    >
      {React.Children.toArray(children).map(e => {
        if (!React.isValidElement(e)) {
          throw new Error('TypeError:children must be reactElement');
        }
        const { style = {}, ...restProps } = e.props;
        //TODO: add position: absolute for different type of children
        return (
          <e.type
            style={{ position: 'absolute', ...style }}
            key={e.key}
            {...restProps}
          />
        );
      })}
    </Relative>
  );
};

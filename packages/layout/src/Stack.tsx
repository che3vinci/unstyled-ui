import React from 'react';
import { Relative } from './Relative';
import { BaseProps } from '../stitches';
import classnames from 'classnames';

export type StackProps = BaseProps;

export const Stack: React.FC<StackProps> = props => {
  const { children, className, ...restProps } = props;

  return (
    <Relative className={classnames(className, 'c3-stack')} {...restProps} >
      {
        React.Children.toArray(children).map(e => {
          if (!React.isValidElement(e)) {
            throw new Error('TypeError:children must be reactElement');
          }
          return <e.type position="absolute" key={e.key} {...e.props} />;
        })
      }
    </Relative >
  );
};

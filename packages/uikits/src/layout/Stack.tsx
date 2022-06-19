import React from 'react';
import { BaseProps, extractClassNameAndProps } from '../Common';
import { Relative } from './Relative';

export type StackProps = BaseProps;

export const Stack: React.FC<StackProps> = props => {
  const { children, ...restProps } = props;

  return (
    <Relative {...extractClassNameAndProps('c3-stack', restProps)}>
      {React.Children.toArray(children).map(e => {
        if (!React.isValidElement(e)) {
          throw new Error('TypeError:children must be reactElement');
        }
        return <e.type position="absolute" key={e.key} {...e.props} />;
      })}
    </Relative>
  );
};

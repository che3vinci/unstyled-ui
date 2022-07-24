import { BaseProps } from '@unstyled-ui/core';
import React from 'react';
import { Relative } from '../Relative';
import { flexCenter } from '../utils';

export type StackProps = {
  body?: JSX.Element;
} & BaseProps;

export const Stack: React.FC<StackProps> = props => {
  const { body, css = {}, children, ...restProps } = props;

  return (
    //@ts-ignore
    <Relative
      // as="u-stack"
      //@ts-ignore
      css={{ overflow: 'hidden', w: 'max-content', ...flexCenter, ...css }}
      {...restProps}
    >
      {body && <body.type {...body.props} key={body?.key} />}
      {React.Children.toArray(children).map(e => {
        if (!React.isValidElement(e)) {
          throw new Error('TypeError:children must be reactElement');
        }
        const { css: cCss = {}, ...restProps } = e.props;
        return (
          <e.type
            css={{ ...cCss, position: 'absolute' }}
            key={e.key}
            {...restProps}
          />
        );
      })}
    </Relative>
  );
};

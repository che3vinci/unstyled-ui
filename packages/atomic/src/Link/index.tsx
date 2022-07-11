import { Atomic } from '../Atomic';
import { link } from './link.utils';
import React from 'react';
import { BaseProps, styled } from '@unstyled-ui/core';
import classNames from 'classnames';

export type LinkProps = BaseProps<React.LinkHTMLAttributes<HTMLLinkElement>> & {
  to: string;
};

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { css, className, to, ...restProps } = props;
  return (
    //@ts-ignore
    <Atomic
      as="a"
      className={classNames(className, 'c3-link')}
      css={{ ...link(), ...css }}
      href={to}
      {...restProps}
    />
  );
};

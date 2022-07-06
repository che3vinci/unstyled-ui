import { Atomic } from '../Atomic';
import { link } from '@styless/css';
import React from 'react';
import { BaseProps, styled } from '../../stitches';
import classNames from 'classnames';

export type LinkProps = BaseProps<React.LinkHTMLAttributes<HTMLLinkElement>> & {
  to: string;
};

export const Link:React.FC<LinkProps> = (props: LinkProps) => {
  const { css, className, to, ...restProps } = props;
  return (
    <Atomic
      as="a"
      className={classNames(className, 'c3-link')}
      css={{ ...link(), ...css }}
      href={to}
      {...restProps}
    />
  );
};

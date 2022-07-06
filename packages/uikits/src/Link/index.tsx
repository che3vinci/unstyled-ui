import { cssProps, link } from '@styless/css';
import { omit } from '@c3/utils';
import React from 'react';
import styled from 'styled-components';
import { notInBlackList } from '..';
import { BaseProps } from '../Common';

interface AProps
  extends BaseProps<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
  to: string;
}
export const Link = styled.a
  .withConfig({
    componentId: 'c3-link',
    shouldForwardProp: prop => notInBlackList(prop),
  })
  .attrs<AProps>(props => ({
    rel: props.ref || 'noreferrer',
    href: props.href || props.to,
  }))<AProps>`

  display:flex;
  align-items:center;
  justify-content:center;

  ${link()};

  ${props => cssProps(omit(props, ['to']))}
` as React.FC<AProps>;

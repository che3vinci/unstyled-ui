import { cssProps } from '@c3/css';
import styled from 'styled-components';
import { notInBlackList } from '..';
import { BaseProps } from '../Common';

export type EleProps<T = React.HTMLAttributes<HTMLElement>> = BaseProps<T>;
export const Ele = styled.div.withConfig({
  shouldForwardProp: props => notInBlackList(props),
})<EleProps>`
  ${props => cssProps(props)}
` as React.FC<EleProps>;

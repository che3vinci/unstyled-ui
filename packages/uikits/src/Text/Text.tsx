import { cssProps, ICssPropsWithTheme } from '@c3/css';
import styled, { css } from 'styled-components';
import { notInBlackList } from '..';
import { BaseProps, setComponentCssForStatus } from '../Common';

export type ITextProps = BaseProps<
  React.HTMLAttributes<HTMLParagraphElement>
> & {
  rows?: number;
};
export const Text = styled.p.withConfig({
  componentId: 'c3-text',
  shouldForwardProp: prop => notInBlackList(prop),
})<ITextProps>`
  line-height: ${(props: ICssPropsWithTheme) =>
    props.theme?.lineHeights?.normal || 'normal'};

  ${props => setComponentCssForStatus(props, 'text')}
  ${props =>
    props.rows &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.rows};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
  && {
    ${props => cssProps(props)}
  }
` as React.FC<ITextProps>;

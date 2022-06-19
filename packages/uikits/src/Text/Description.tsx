import styled from 'styled-components';
import { Text } from '.';
import { notInBlackList } from '..';
import { ITextProps } from './Text';

export const Description = styled(Text).withConfig({
  componentId: 'c3-description',
  shouldForwardProp: prop => notInBlackList(prop),
})`` as React.FC<ITextProps>;

import styled from 'styled-components';
import { notInBlackList } from '..';
import { Row } from '../layout/Row';

export const Nav = styled(Row)
  .withConfig({
    componentId: 'c3-nav',
    shouldForwardProp: prop => notInBlackList(prop),
  })
  .attrs({ as: 'nav' })``;

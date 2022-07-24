import { styled } from '@unstyled-ui/core';
import { Atomic } from '../Atomic';
import { link } from './link.utils';

export const Link = styled(Atomic, {
  ...link(),
});

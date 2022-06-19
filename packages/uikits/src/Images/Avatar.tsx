import React from 'react';
import styled from 'styled-components';
import { notInBlackList } from '..';
import { IImageProps, Image } from './Image';

export const Avatar = styled(Image).withConfig({
  componentId: 'c3-avatar',
  shouldForwardProp: prop => notInBlackList(prop),
})`` as React.FC<IImageProps>;

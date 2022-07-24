import { Image } from './Image';
import React from 'react';
import { styled } from '@unstyled-ui/core';

export const Icon = Image;

export const Avatar = styled(Image, {
  round: true,
});

// import { cssProps } from '@unstyled-ui/css';
// import React from 'react';
// import styled from 'styled-components';
// import { BaseProps, setComponentCssForStatus } from '../Common';
// import { getStyledConfig } from '../layout/shouldForwardProp';
// export type InputState = 'placeholder' | 'focus' | 'error' | 'blur'; //blur: have content and blur

import { styled } from '@unstyled-ui/core';

// export interface IRawInputProps
//   extends BaseProps<React.InputHTMLAttributes<HTMLInputElement>> {
//   status?: InputState;
// }

export const RawInput = styled('input');

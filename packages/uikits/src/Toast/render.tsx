// // import { getNewAppendedNode } from '@c3/dom';
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { BaseProps } from '@unstyled-ui/core';
// // import { Toast } from './Toast';

// // export type ToastConfig = Omit<BaseProps, 'content'> & {
// //   content: JSX.Element;
// //   duration?: number; //ms
// // };

// export const render = (props: ToastConfig) => {
//   const { content, duration = 5000, ...restProps } = props;
//   ReactDOM.render(
//     <Toast
//       animation={getDefaultAnimation(duration)}
//       css={deaultToastAnimation}
//       {...restProps}
//     >
//       {content}
//     </Toast>,
//     getNewAppendedNode('toast-container')
//   );
// };
export {};

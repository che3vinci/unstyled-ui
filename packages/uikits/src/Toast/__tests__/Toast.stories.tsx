// import React from 'react';
// import { css, ThemeProvider } from 'styled-components';
// import { Button } from '../../Button';
// import { Text } from '../../Text';
// import { toast } from '../toasts';

// const animation = css`
//   @keyframes step1 {
//     from {
//       left: 100vw;
//     }
//     to {
//       left: 50vw;
//     }
//   }
//   @keyframes step2 {
//   }
//   @keyframes step3 {
//     from {
//       left: 50vw;
//     }
//     to {
//       left: 0vw;
//     }
//   }
// `;

// const Template = (args: any) => (
//   <ThemeProvider theme={{ colors: { red: 'red' } }}>
//     <Button
//       {...args}
//       onClick={() => {
//         toast.error({
//           content: <Text>hello</Text>,
//           duration: 1000000,
//           // background: ['red'],
//           border: '1px solid ',
//           // duration: 5000,
//           // animation: 'step1 3s,step2 3s,step3 3s',
//           // animationDelay: '0s, 3s, 6s',
//           // animationFillMode: 'forwards',

//           // css: animation,
//         });
//       }}
//     >
//       show Toast
//     </Button>
//     <Button
//       {...args}
//       onClick={() => {
//         toast.success({
//           content: <Text>hello</Text>,
//           duration: 1000000,
//           // background: ['red'],
//           border: '1px solid ',
//           // duration: 5000,
//           // animation: 'step1 3s,step2 3s,step3 3s',
//           // animationDelay: '0s, 3s, 6s',
//           // animationFillMode: 'forwards',

//           // css: animation,
//         });
//       }}
//     >
//       success
//     </Button>
//     <Button
//       {...args}
//       onClick={() => {
//         toast.loading({
//           content: <Text>hello</Text>,
//           duration: 1000000,
//           // background: ['red'],
//           border: '1px solid ',
//           // duration: 5000,
//           // animation: 'step1 3s,step2 3s,step3 3s',
//           // animationDelay: '0s, 3s, 6s',
//           // animationFillMode: 'forwards',

//           // css: animation,
//         });
//       }}
//     >
//       loading
//     </Button>
//     ;
//   </ThemeProvider>
// );
// export const Default = Template.bind({});
// Default.args = {};

// export default {
//   component: Default,
//   title: 'Toast',
// };
export {};

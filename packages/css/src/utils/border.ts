// import { HVDirection, toArray } from '@c3/utils';
// import { css } from 'styled-components';
// import { rcss, ResponsiveInputValueType } from '../responsive';
// import { ResponsiveCSSProperties } from './../responsive/type';

// export const borderRadiusForGroup = (
//   borderRadius: ResponsiveInputValueType,
//   direction: HVDirection
// ) => {
//   const isV = direction === 'vertical';
//   return css`
//     & > *:first-child {
//       ${borderRadius &&
//       rcss(
//         isV
//           ? {
//               borderTopRightRadius: borderRadius,
//               borderTopLeftRadius: borderRadius,
//             }
//           : {
//               borderTopLeftRadius: borderRadius,
//               borderBottomLeftRadius: borderRadius,
//             }
//       )}
//     }
//     & > *:last-child {
//       ${borderRadius &&
//       rcss(
//         isV
//           ? {
//               borderBottomLeftRadius: borderRadius,
//               borderBottomRightRadius: borderRadius,
//             }
//           : {
//               borderBottomRightRadius: borderRadius,
//               borderTopRightRadius: borderRadius,
//             }
//       )}
//     }
//   `;
// };

// export const roundBorder = (height: ResponsiveInputValueType) => {
//   return {
//     border: toArray(height).map(e => `${+e / 2}`),
//   } as ResponsiveCSSProperties;
// };

// export const roundBorderValue = (height: number) => {
//   return height / 2;
// };
export {}

export {};
// import { CloseCircleOutlined } from '@ant-design/icons';
// import { rcss } from '@c3/css';
// import { Fn } from '@c3/utils';
// import { noop } from 'lodash';
// import React from 'react';
// import { css } from 'styled-components';
// import { Button } from '../Button';
// import { BaseProps } from '../Common';
// import { Row } from '../layout';
// import { ModalFooterProps, ModalTitleProps } from './Modal';

// export const titlecss = css`
//   width: 100%;
//   color: white;
//   .c3-modal-close-btn {
//     position: absolute;
//     ${rcss({
//       fontSize: [30, 22],
//       right: [40, 20],
//       top: [40, 20],
//     })}
//   }
// `;

// export const TitleBar: React.FC<ModalTitleProps> = props => {
//   const { onClose = noop, title, ...restProps } = props;
//   return (
//     <Row fx="space-between" className="c3-modal-title" {...restProps}>
//       {title}
//       <span className="c3-modal-close-btn">
//         <CloseCircleOutlined onClick={onClose} />
//       </span>
//     </Row>
//   );
// };

// export const Footer: React.FC<ModalFooterProps> = ({
//   onOk,
//   onCancel,
//   ...restProps
// }) => {
//   return (
//     <Row fx="space-between" {...restProps}>
//       <Button onClick={onCancel} kind="weak">
//         Cancel
//       </Button>
//       <Button onClick={onOk}>OK</Button>
//     </Row>
//   );
// };

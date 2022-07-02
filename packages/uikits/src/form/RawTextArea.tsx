import { cssProps, ThKind } from '@c3/css';
import styled from 'styled-components';
import {
  BaseProps,
  setComponentCssForKind,
  setComponentCssForStatus,
} from '../Common';
import { notInBlackList } from '../layout';

export type IRawTextAreaProps = BaseProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> & {
  kind?: ThKind | ThKind[];
};

export const RawTextArea = styled.textarea.withConfig({
  componentId: 'c3-textarea',
  shouldForwardProp: prop => notInBlackList(prop),
})<IRawTextAreaProps>`
  width: 100%;
  resize: none;
  ${props => setComponentCssForStatus(props, 'textarea')}
  ${props => setComponentCssForKind(props, 'textarea', props.kind || 'normal')}

${props => cssProps(props)};
` as React.FC<IRawTextAreaProps>;

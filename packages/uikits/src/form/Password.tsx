import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import {
  absYCenter,
  ResponsiveInputValueType,
  toResponsiveArray,
} from '@c3/css';
import { useToggle } from '@c3/hooks';
import React from 'react';
import { BaseProps } from '../Common';
import { Abs, Relative } from '../layout';
import { IRawInputProps, RawInput } from './RawInput';

export interface IPasswordProps extends IRawInputProps {
  showPassword: boolean;
  eyeProps: BaseProps;
}
export const Password: React.FC<IPasswordProps> = ({
  showPassword,
  height,
  eyeProps,
  ...props
}) => {
  const [visible, toggle] = useToggle(false);
  return (
    <Relative width="100%">
      <RawInput
        height={height}
        width={'100%'}
        {...props}
        type={visible ? 'text' : 'password'}
      ></RawInput>
      {showPassword && (
        <Abs
          {...absYCenter({
            right: toResponsiveArray(height || 10).map(
              e => `calc((${e}px  - 1em)/2)`
            ) as ResponsiveInputValueType,
          })}
          onClick={() => toggle()}
          {...eyeProps}
        >
          {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </Abs>
      )}
    </Relative>
  );
};

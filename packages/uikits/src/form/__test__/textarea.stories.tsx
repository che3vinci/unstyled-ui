import { useAutoSize } from '@c3/hooks';
import React from 'react';
import { TextArea, TextAreaProps } from '../TextArea';

const AutoSizeTextArea = () => {
  useAutoSize('.textarea');
  return <TextArea textareaProps={{ className: 'textarea' }}>dddd</TextArea>;
};

const Template = (args: any) => <AutoSizeTextArea {...args} />;
export const Default = Template.bind({});
Default.args = {} as TextAreaProps;
export default {
  component: AutoSizeTextArea,
  title: 'AutoSizeTextArea',
};

import { mock } from '@c3/utils';
import React from 'react';
import { Link, LinkProps } from './Link';

const Template = (args: any) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: 'https://www.baidu.com',
  target: '_blank',
  children: 'clickme',
} as LinkProps;

export default {
  component: Link,
  title: 'Link',
};

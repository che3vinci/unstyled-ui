import React from 'react';
import { Fixed } from './Fixed';

const Template = (args: any) => <Fixed {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p className='fixed-2'>2</p>
      <p>2</p>
    </div>
  ),
};

export default {
  component: Fixed,
  title: 'layout/Fixed',
};

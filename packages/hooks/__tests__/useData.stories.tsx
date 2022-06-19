import React from 'react';
import { useData } from '../src/useData';
const UseDataComponent = () => {
  const data = useData({ a: 2 });

  return <div onClick={() => data.a++}>{data.a}</div>;
};

const Template = (args: any) => <UseDataComponent {...args} />;
export const Default = Template.bind({});
Default.args = {};
export default {
  component: UseDataComponent,
  title: 'UseDataComponent',
};

import { useData } from '@c3/hooks';
import React from 'react';
const UseDataComponent = () => {
  const data = useData({ a: 2, obj: { b: 3 } });

  return (
    <div>
      <button onClick={() => data.a++}>click:value={data.a}</button>;
      <button onClick={() => data.obj.b++}>click:value={data.obj.b}</button>;
    </div>
  );
};

const Template = (args: any) => <UseDataComponent {...args} />;
export const Default = Template.bind({});
Default.args = {};
export default {
  component: UseDataComponent,
  title: 'UseDataComponent',
};

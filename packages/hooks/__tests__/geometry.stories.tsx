import React from 'react';
const Gemometry: React.FC = () => {
  return (
    <div className="container" style={{ height: 100 }}>
      <div
        className="inner"
        style={{ height: 200, border: '10px solid black' }}
      ></div>
    </div>
  );
};

const Template = (args: any) => <Gemometry {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {};
export default {
  component: Gemometry,
  title: 'Comp',
};

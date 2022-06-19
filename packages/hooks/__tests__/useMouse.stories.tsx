import useMouse from '@c3/hooks/useMouse';
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div``;
const UseMouseComponent: React.FC = () => {
  const geo = useMouse();
  return <Wrapper>{JSON.stringify(geo)}</Wrapper>;
};

const Template = (args: any) => <UseMouseComponent {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {};
export default {
  component: UseMouseComponent,
  title: 'UseMouseComponent',
};

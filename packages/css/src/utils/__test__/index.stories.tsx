import React from 'react';
import styled from 'styled-components';
import { arrow, Direction } from '../arrow';

const Arrow = styled.div<{ direction: Direction }>`
  min-width: 100px;
  height: 100px;
  margin: 50px;
  background: black;
  ${props => arrow(props.direction, '10px', '50%')}
`;
const Triangle: React.FC = () => {
  return (
    <div id="root" style={{ display: 'flex' }}>
      <Arrow direction="left"></Arrow>
      <Arrow direction="right"></Arrow>
      <Arrow direction="top"></Arrow>
      <Arrow direction="bottom"></Arrow>
    </div>
  );
};

const Template = (args: any) => <Triangle {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {};
export default {
  component: Triangle,
  title: 'Triangle',
};

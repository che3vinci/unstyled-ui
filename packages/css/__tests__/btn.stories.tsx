import { btn, theme } from '@c3/css';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const StyledBtn = styled.button`
  ${btn([100], [80], [20], { color: 'gray', bgcolor: 'white' })}
`;
const Btn = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBtn>submit</StyledBtn>
    </ThemeProvider>
  );
};

const Template = (args: any) => <Btn {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {};
export default {
  Btnonent: Btn,
  title: 'Btn',
};

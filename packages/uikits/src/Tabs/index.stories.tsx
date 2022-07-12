import React from 'react';
import { MenuConfig, Switcher, SwitcherProps } from './Switcher';

type Item = {
  id: string;
  title: string;
  to: string;
  isSelected: boolean;
  renderContent: () => JSX.Element;
  renderItem: () => JSX.Element;
};

const config: MenuConfig<Item> = [
  {
    id: 'profile',
    title: 'Profile',
    to: '/account#profile',
    isSelected: true,
    renderContent: () => <span>content</span>,
    renderItem: () => {
      return <span>xx</span>;
    },
  },
  {
    id: '222',
    title: '2222',
    to: '/account#222',
    isSelected: false,
    renderContent: () => <span>hello,w222</span>,
    renderItem: () => {
      return <span>222</span>;
    },
  },
];

const App = props => {
  return <Switcher {...props}></Switcher>;
};
const Template = (args: any) => <App {...args} />;
export const switcher = Template.bind({});

switcher.args = {
  direction: 'vertical',
  menuConfig: config,
  updateConfig: () => {},
  afterSwitch: () => {
    console.log('after click');
  },
} as SwitcherProps<Item>;

export default {
  component: Switcher,
  title: 'Switcher',
};

import React from 'react';
import { MenuConfig, SwitcherProps } from './Switcher';
import { useSwitcher } from './useSwitcher';

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
      return <span>profile</span>;
    },
  },
  {
    id: '222',
    title: 'name',
    to: '/account#222',
    isSelected: false,
    renderContent: () => <span>content2</span>,
    renderItem: () => {
      return <span>222</span>;
    },
  },
];

const App = props => {
  const Switcher = useSwitcher(props.menuConfig, props.direction);
  return Switcher;
};
const Template = (args: any) => <App {...args} />;

export const HoriontalSwitcher = Template.bind({});
HoriontalSwitcher.args = {
  menuConfig: config,
  direction: 'horizontal',
} as SwitcherProps<Item>;


export const VerticalSwitcher = Template.bind({});
VerticalSwitcher.args = {
  menuConfig: config,
  direction: 'vertical',
} as SwitcherProps<Item>;

export default {
  component: App,
  title: 'Switcher',
};

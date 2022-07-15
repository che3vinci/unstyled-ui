import React from 'react';
import { MenuConfig, SwitcherProps, Switcher } from './Switcher';
import { useSwitcher } from './useSwitcher';
import { useSteps } from './useSteps';
export default {
  component: Switcher,
  title: 'Switcher',
};

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
    renderContent: () => <span>content1</span>,
    renderItem: () => {
      return <span>nav1</span>;
    },
  },
  {
    id: '222',
    title: 'name',
    to: '/account#222',
    isSelected: false,
    renderContent: () => <span>content2</span>,
    renderItem: () => {
      return <span>nav2</span>;
    },
  },
  {
    id: '333',
    title: 'name3',
    to: '/account#222',
    isSelected: false,
    renderContent: () => <span>content3</span>,
    renderItem: () => {
      return <span>nav3</span>;
    },
  },
];

const SwitcherApp = props => {
  const Switcher = useSwitcher(props.menuConfig, props.direction);
  return Switcher;
};
const SwitcherTemplate = (args: any) => <SwitcherApp {...args} />;

export const HoriontalSwitcher = SwitcherTemplate.bind({});
HoriontalSwitcher.args = {
  menuConfig: config,
  direction: 'horizontal',
} as SwitcherProps<Item>;

export const VerticalSwitcher = SwitcherTemplate.bind({});
VerticalSwitcher.args = {
  menuConfig: config,
  direction: 'vertical',
} as SwitcherProps<Item>;

//
const StepsApp = (props): JSX.Element => {
  const [Switcher, goNext, goPrev] = useSteps(
    props.menuConfig,
    props.direction
  );
  return (
    <div>
      {Switcher}
      <button onClick={goNext}>goNext</button>
      <button onClick={goPrev}>goPrev</button>
    </div>
  );
};
const StepsTemplate = (args: any) => <StepsApp {...args} />;

export const HoriontalSteps = StepsTemplate.bind({});
HoriontalSteps.args = {
  menuConfig: config,
  direction: 'horizontal',
} as SwitcherProps<Item>;

export const VerticalStep = StepsTemplate.bind({});
VerticalStep.args = {
  menuConfig: config,
  direction: 'vertical',
} as SwitcherProps<Item>;

//

import React, { useState } from 'react';
import {
  MenuConfig,
  SwitcherProps,
  Switcher,
  BaseSwitchItemType,
} from './Switcher';
import { useSwitcher } from './useSwitcher';
import { useSteps } from './useSteps';
import { Text } from '@unstyled-ui/atomic';
export default {
  component: Switcher,
  title: 'uikits/Switcher',
};

type Item = {
  title: string;
  to: string;
  active: boolean;
} & BaseSwitchItemType;

const config: MenuConfig<Item> = [
  {
    id: '1',
    title: 'name1',
    to: '/account#profile',
    active: true,
    renderContent: () => <Text>content1</Text>,
  },
  {
    id: '2',
    title: 'name2',
    to: '/account#222',
    active: false,
    renderContent: () => <Text>content2</Text>,
  },
  {
    id: '3',
    title: 'name3',
    to: '/account#222',
    active: false,
    renderContent: () => <Text>content3</Text>,
  },
  {
    id: '4',
    title: 'name4',
    to: '/account#2222',
    active: false,
    renderContent: () => <Text>content3</Text>,
  },
];

const SwitcherApp = (props): JSX.Element => {
  const [menuconfig, setMenuConfig] = useState(config);
  return (
    <Switcher
      menuConfig={menuconfig}
      updateConfig={setMenuConfig}
      renderItem={(e: Item) => <Text>{e.title}</Text>}
      css={{ 'u-nav': { border: '1px solid red' } }}
      {...props}
    />
  );
};

export const HoriontalSwitcher = () => (
  <SwitcherApp direction="row"></SwitcherApp>
);
export const VerticalSwitcher = () => (
  <SwitcherApp direction="column"></SwitcherApp>
);

//
const StepsApp = (props): JSX.Element => {
  const [menu, setMenu] = useState(config);
  const [Switcher, goNext, goPrev] = useSteps<Item>({
    ...props,
    menuConfig: menu,
    updateConfig: setMenu,
  });
  return (
    <div>
      {Switcher}
      <button onClick={goNext}>goNext</button>
      <button onClick={goPrev}>goPrev</button>
    </div>
  );
};

// export const HoriontalSteps = <StepsApp direction="row" />;

// export const VerticalStep = <StepsApp direction="column" />;

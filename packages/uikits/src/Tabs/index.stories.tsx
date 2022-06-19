// import { SliderBaseProps } from 'antd/lib/slider';
// import React from 'react';
// import { SideBar } from './SideBar';
// import { MenuConfig, Switcher, SwitcherProps } from './Switcher';

// const config: MenuConfig = [
//   {
//     id: 'profile',
//     title: 'Profile',
//     to: '/account#profile',
//     isSelected: true,
//     renderContent: () => <span>content</span>,
//     renderItem: () => {
//       return <span>xx</span>;
//     },
//   },
//   {
//     id: '222',
//     title: '2222',
//     to: '/account#222',
//     isSelected: false,
//     renderContent: () => <span>2222</span>,
//     renderItem: () => {
//       return <span>222</span>;
//     },
//   },
// ];
// const Template = (args: any) => <Switcher {...args} />;
// export const switcher = Template.bind({});

// switcher.args = {
//   direction: 'vertical',
//   config: config,
//   navProps: {},
//   afterSwitch: () => {
//     console.log('after click');
//   },
// } as SwitcherProps;

// const SidebarTemplate = (args: any) => <SideBar {...args} />;
// export const sideBar = SidebarTemplate.bind({});

// sideBar.args = {
//   config: config.concat([
//     {
//       id: '333',
//       title: '3333',
//       to: '/account#333',
//       isSelected: false,
//       renderContent: () => <span>3333</span>,
//       renderItem: () => {
//         return <span>333</span>;
//       },
//     },
//   ]),
//   navProps: {},
//   afterSwitch: () => {
//     console.log('after click');
//   },
// } as SliderBaseProps;

// export default {
//   component: Switcher,
//   title: 'Switcher',
// };

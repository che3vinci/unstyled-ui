import { mock } from '@c3/utils';
import React from 'react';
import { IInfoProps, InfoBar } from '.';
import { Icon, Text } from '@unstyled-ui/atomic';
import { Col } from '@unstyled-ui/layout';

const Template = args => <InfoBar {...args} />;
export const VertialInfoBar = Template.bind({});
VertialInfoBar.args = {
  direction: 'vertical',
  icon: <Icon src={mock.getRandomPic()} />,
  text: (
    <Col
      css={{
        fx: 'center',
        gap: 5,
        color: '#2F5071',
        fontSize: 35,
      }}
    >
      <p>Oooooops!</p>
      <p>Finding Nothing</p>
    </Col>
  ),
} as IInfoProps;

export const HorizontalInfoBar = Template.bind({});

HorizontalInfoBar.args = {
  direction: 'horizontal',
  icon: <Icon src={mock.getRandomPic()} css={{ width: 100 }} />,
  text: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat sunt in culpa qui officia deserunt
      mollit anim id est laborum
    </Text>
  ),
} as IInfoProps;

export default {
  component: InfoBar,
  title: 'InfoBar',
};

import { wait } from '@c3/utils';
import React from 'react';
import { Button } from './Button';
import { useButton } from './useButton';
import { Text } from '../Text';
import { Space } from '../Space';
export default {
  component: Button,
  title: 'atomic/Button',
};

export const NormalButton = () => <Button>normal button</Button>;

export const RoundButton = () => (
  <Button css={{ round: true, w: 100, h: 40 }}>hello</Button>
);

export const ResponsiveButton = () => (
  <Button css={{ round: true, w: [200, 400], h: 40 }}>hello</Button>
);
export const RoleBtn = () => {
  return (
    <>
      <Text disabled role="button">
        disabled-text-btn
      </Text>
      <Space size={10}></Space>
      <Text role="button">text</Text>
    </>
  );
};

export const LoadingButton = () => {
  return useButton(
    <Button
      onClick={async () => {
        await wait(30000);
      }}
      css={{
        w: 100,
        h: 40,
        children: 'click2loading',
      }}
    >
      clickme
    </Button>,
    {
      useLoading: true,
    }
  );
};

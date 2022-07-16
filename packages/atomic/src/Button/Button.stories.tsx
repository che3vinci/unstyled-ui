import { wait } from '@c3/utils';
import React from 'react';
import { Button } from './Button';
import { useButton } from './useButton';
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

export const LoadingButton = () => {
  return useButton({
    props: {
      w: 100,
      h: 40,
      children: 'click2loading',
      onClick: async () => {
        await wait(30000);
      },
    },
    useLoading: true,
  });
};

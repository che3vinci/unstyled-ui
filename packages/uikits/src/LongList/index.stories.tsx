import { nCol } from '@c3/css';
import { s } from '@c3/utils';
import _ from 'lodash';
import React from 'react';
import { css } from 'styled-components';
import { AutoLongList, IAutoLongListProps } from '.';
import { Box } from '../layout';

const Template = (args: any) => <AutoLongList {...args} />;
export const Default = Template.bind({}) as any as { args: any };

interface Item {
  key: string;
  title: string;
  desc: string;
  avatar: string;
}

Default.args = {
  initialData: _.times(10, i => ({
    key: s(Date.now()),
    title: 'hello,page:' + '-' + i,
    desc: 'hello,xxx',
    avatar: 'https://picsum.photos/200/300/?blur',
  })),
  load: (pageNo: number) => {
    return Promise.resolve(
      _.times(2, i => ({
        key: s(Date.now()),
        title: 'hello,page:' + pageNo + '-' + i,
        desc: 'hello,xxx',
        avatar: 'https://picsum.photos/200/300/?blur',
      }))
    );
  },
  maxPageNo: 100,
  renderItem: i => <Box dbg>{i.title}</Box>,
  height: [200],
  overflow: 'scroll',
  css: css`
    .c3-list {
      ${nCol([3], [100], [200])}
    }
  `,
} as IAutoLongListProps<Item>;

export default {
  component: AutoLongList,
  title: 'LongList',
};

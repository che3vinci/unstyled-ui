import { List } from './index';
import { Text } from '@unstyled-ui/atomic';
import React, { useState } from 'react';
import { TextItem } from '../TextItem';
import { mock } from '@c3/utils';

export default {
  title: 'uikits/List',
  component: List,
};

const idata = [
  {
    id: 1,
    name: 'FindingNothing',
    active: true,
  },
  {
    id: 2,
    name: '222',
  },
  {
    id: 3,
    name: '3333',
  },
];

export const Default = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      renderItem={t => (
        <TextItem
          text={t.name}
          icon={mock.getRandomPic(32, 32)}
          css={{
            '&.uu-active': {
              color: 'red',
            },
          }}
        />
      )}
      updateList={setData}
    />
  );
};

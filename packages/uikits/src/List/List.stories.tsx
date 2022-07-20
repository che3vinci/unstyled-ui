import { mock } from '@c3/utils';
import React, { useState } from 'react';
import { Item } from '../Item';
import { List } from './List';

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
        <Item
          text={t.name}
          icon={mock.getRandomPic(32, 32)}
          css={{
            '&[active]': {
              color: 'red',
            },
          }}
        />
      )}
      updateData={setData}
    />
  );
};
export const DisabledButton = () => {
  return (
    <div>
      <button disabled>disabled</button>
      <button disabled={true}>true</button>;
      <button disabled={false}>false</button>;
    </div>
  );
};

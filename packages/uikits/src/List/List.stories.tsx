import { mock } from '@c3/utils';
import React, { useState } from 'react';
import { Item } from '../Item';
import { List } from './List';
import { Image, Text } from '@unstyled-ui/atomic';

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
const ItemX = t => {
  console.log('t');
  return (
    <Item
      prefix={<Image css={{ w: 48, h: 48 }} src={mock.getRandomPic(32, 32)} />}
      css={{
        '&[active]': {
          color: 'red',
        },
      }}
    >
      <Text>{t.name}</Text>
    </Item>
  );
};
const ItemX1 = React.memo(ItemX);

export const Default = props => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      renderItem={e => <ItemX1 {...e}></ItemX1>}
      updateData={setData}
      {...props}
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

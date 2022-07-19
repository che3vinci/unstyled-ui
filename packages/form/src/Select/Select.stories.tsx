import { Select } from './Select';
import React, { useState } from 'react';
import { Option } from './Option';
import { List } from '@unstyled-ui/uikits';
import { Button, Text } from '@unstyled-ui/atomic';
import { isEmpty } from '@c3/utils';

export default {
  title: 'form/select',
  component: Select,
};
const config = [
  { id: 1, name: 'name1', value: 1, active: true },
  { id: 2, name: 'name2', value: 2 },
  { id: 3, name: 'name3', value: 3 },
  { id: 4, name: 'name4', value: 4 },
];

export const styledSelect: React.FC = () => {
  const [selected, setSelected] = useState<Option>({});
  const [data, setData] = useState(config);
  console.log('selected', selected);
  return (
    <Select
      name="select"
      onChange={setSelected}
      selected={selected}
      selectBox={
        isEmpty(selected) ? (
          <Button>select </Button>
        ) : (
          <Text>{selected.name}</Text>
        )
      }
      css={{ '& [active]': { color: 'red' } }}
    >
      <List
        data={data}
        updateData={setData}
        renderItem={e => (
          <Text name={e.name} value={e.value}>
            {e.name}
          </Text>
        )}
      />
    </Select>
  );
};

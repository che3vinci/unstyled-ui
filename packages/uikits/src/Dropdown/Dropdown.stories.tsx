import { Dropdown } from './Dropdown';
import React from 'react';

export default {
  component: Dropdown,
  title: 'uikits/Dropdown',
};

export const ClickDropdown = () => (
  <Dropdown
    overlay={
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    }
  >
    <button>click</button>
  </Dropdown>
);
export const HoverDropdown = () => (
  <Dropdown
    trigger={['hover']}
    overlay={
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    }
  >
    <button>click</button>
  </Dropdown>
);

import React from 'react';
import { Col } from '@unstyled-ui/layout';
import { BaseProps } from '@unstyled-ui/core';
import { Badget } from '../src';

export type AppProps = BaseProps;

const App: React.FC<AppProps> = props => {
  const { ...restProps } = props;
  return (
    <Badget
      {...restProps}
      value={2}
      css={{ w: 200, border: '1px solid red', round: true }}
    >
      hello
    </Badget>
  );
};
export default App;

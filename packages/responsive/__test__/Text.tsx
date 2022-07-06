import React from 'react';
import { Text } from '../src';
const App = () => {
  return (
    <Text
      rows={2}
      gradient="linear-gradient(to right, red, #fff)"

      css={{ color: 'green', width: [100,200] }}
      onClick={() => {
        console.log('click');
      }}

    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit.
    </Text>
  );
};

export default App;

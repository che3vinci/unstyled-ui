import React from 'react';
import { Text } from '../..';
const App = () => {
  return (
    <Text
      rows={2}
      gradient="linear-gradient(to right, red, #fff)"
      css={{
        color: 'green',
        width: [100, 200],
        border: '1px solid red',
        round: true,
      }}
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

const Template = (args: any) => <App {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil provident magnam autem est ut quaerat eaque corporis odit.',
};

export default {
  component: Text,
  title: 'Text',
};

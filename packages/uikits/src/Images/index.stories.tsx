import { mock } from '@c3/utils';
import React from 'react';
import { IImageProps, Image } from './Image';
const Template = (args: any) => <Image {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {
  src: mock.getRandomPic(),
} as IImageProps;
(async () => {
  const data = await mock.getRandomUser();
  console.log('user', data);
})();

export default {
  component: Image,
  title: 'Image',
};

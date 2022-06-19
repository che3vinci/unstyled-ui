import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Slider from 'react-slick';
import 'react-slick/dist/react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Template = (args: any) => (
  <Slider {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </Slider>
);
export const Default = Template.bind({}) as any as { args: any };
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <LeftCircleOutlined width="20px" height="20px" />,
  nextArrow: <RightCircleOutlined width="20px" height="20px" />,
};
Default.args = {
  ...settings,
};

export default {
  component: Slider,
  title: 'Slider',
};

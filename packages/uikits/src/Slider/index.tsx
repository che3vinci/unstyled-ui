import React from 'react';
import InnerSlider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { css } from 'styled-components';
import { BaseProps } from '../Common';
import { Col } from '../layout';

const style = css`
  .slick-dots {
    bottom: 0;
  }
  .slick-arrow {
    z-index: 1;
  }
  .slick-arrow.slick-next {
    right: 10px;
  }
  .slick-arrow.slick-prev {
    left: 10px;
  }
`;
export interface ISliderProps extends BaseProps {
  setting: Settings;
}
export const Slider: React.FC<ISliderProps> = ({ setting, ...props }) => {
  return (
    <Col css={style} {...props}>
      <InnerSlider {...setting}></InnerSlider>
    </Col>
  );
};

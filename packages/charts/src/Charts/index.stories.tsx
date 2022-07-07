import React from 'react';
import { Chart, IChartOption } from './Chart';
const Template = (args: any) => <Chart {...args} />;
export const Default = Template.bind({});

Default.args = {
  width: [800],
  height: [600],
  border: '1px solid red',

  options: {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      // top: '5%',
      // left: 'center'
      // right:'0',
      orient: 'vertical',
      left: 'right',
      top: 'center',
    },
    series: [
      {
        name: 'Access From',
        center: [],
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
            formatter: e => {
              console.log('e', e);
            },
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  },
} as IChartOption;

export default {
  component: Chart,
  title: 'Chart',
};

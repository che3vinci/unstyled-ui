import { formatNumber } from '@c3/utils';
import type { EChartsOption } from 'echarts';

export const yAxis: (x: number) => EChartsOption['yAxis'] = (x = 5) => ({
  max: ({ max }) => {
    return max + Math.max(Math.floor(max * 0.1), x);
  },
  axisLabel: {
    formatter: (v: number) => `${formatNumber(v, '0a')}`, // 200k/m/b
  },
  axisLine: {
    show: true,
    lineStyle: {
      width: 1,
    },
  },
});

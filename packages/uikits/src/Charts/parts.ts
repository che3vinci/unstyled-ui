import { formatNumber } from '@c3/utils';

export const showYSplitline = (show: boolean) => ({
  yAxis: {
    splitLine: {
      show,
    },
  },
});

export const showXSplitline = (show: boolean) => ({
  xAxis: {
    splitLine: {
      show,
    },
  },
});

export const pos = {
  rightCenter: {
    left: 'right',
    top: 'center',
  },
};

export const yAxis = {
  max: 'dataMax',
  axisLabel: {
    formatter: (v: number) => `${formatNumber(v, '0a')}`,
  },
  axisLine: {
    show: true,
    lineStyle: {
      width: 1,
    },
  },
};

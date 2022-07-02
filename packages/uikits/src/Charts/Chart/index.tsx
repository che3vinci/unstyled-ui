import { ICssProps } from '@c3/css';
import { useMount, useUnmount } from '@c3/hooks';
import { entries } from '@c3/utils';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import { Col } from '../../layout';

export interface IChartOption extends ICssProps {
  readonly options: echarts.EChartsOption;
  readonly theme?: string | Record<string, any>;
  readonly onEvents?: {
    [eventName: string]: (para: any, ref: echarts.EChartsType) => void;
  };
  readonly showLoading?: boolean;
}

export const Chart = ({
  options,
  theme,
  showLoading,
  onEvents,
  ...props
}: IChartOption) => {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.EChartsType | null>(null);
  useMount(() => {
    if (!ref.current) {
      return;
    }
    const chartInstance = echarts.init(ref.current, theme, {
      renderer: 'canvas',
    });
    chartInstance.setOption(options as any);
    showLoading && chartInstance.showLoading();

    //bindEvents
    onEvents &&
      entries(onEvents).forEach(([eventName, action]) => {
        //@ts-ignore
        chartInstance.on(eventName, parm =>
          action.call(null, parm, chartInstance)
        );
      });

    chartRef.current = chartInstance;
  });
  useMount(() => {
    window.onresize = () => {
      chartRef.current && chartRef.current.resize();
    };
  });
  useUnmount(() => {
    chartRef.current && chartRef.current.dispose();
  });
  useEffect(() => {
    if (!chartRef.current) {
      return;
    }
    //@ts-ignore
    chartRef.current.setOption(options);
  }, [chartRef, options]);
  return <Col ref={ref} {...props}></Col>;
};

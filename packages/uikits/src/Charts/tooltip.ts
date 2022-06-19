export const tooltip = () => ({
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'line', //cross
    },

    backgroundColor: ' rgba(23, 137, 243, 0.7)',
    textStyle: {
      color: 'rgba(255, 255, 255, 0.65)',
      fontSize: 12,
      fontWeight: 400,
    },
    borderColor: 'rgba(23, 137, 243, 0.7)',
    padding: [8, 56, 8, 16],
    formatter: (p: echarts.TooltipComponentFormatterCallbackParams) => {
      return `<span>Balance</span><br /> <span style="font-size:14px">${
        (p as any)[0].data[1]
      }</span>`;
    },
  },
});

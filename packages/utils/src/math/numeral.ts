import numeral from 'numeral';

export const formatNumber = (data: string | number, format = '0,0') =>
  numeral(data).format(format);

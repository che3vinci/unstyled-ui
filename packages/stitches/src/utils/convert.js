import { toArray } from '@c3/utils';
import { origin, rvw } from '@unstyled-ui/responsive';

// <Button type={{
// @bp1: {
// }}>

//[mobile,laptop,desktop]
export const convertResponsiveArrayForVariant = value => {
  const values = toArray(value);
  switch (values.length) {
    case 1: {
      return values[0];
    }
    case 2:
      return {
        '@m1': values[0],
        '@m2': values[1],
        '@m3': values[1],
      };
    case 3:
      return {
        '@m1': values[0],
        '@m2': values[1],
        '@m3': values[2],
      };
    default:
      throw new Error(`invalid para:${JSON.stringify(values)} `);
  }
};

const globalStyle = {
  '@m1': {},
  '@m2': {},
  '@m3': {},
};
export const convertResponsiveArrayForStyle = (key, value) => {
  const values = toArray(value);
  switch (values.length) {
    case 2:
      globalStyle['@m1'] = { ...globalStyle['@m1'], [key]: rvw(values[0]) };
      globalStyle['@m2'] = { ...globalStyle['@m2'], [key]: rvw(values[1]) };
      globalStyle['@m3'] = { ...globalStyle['@m3'], [key]: origin(values[1]) };
      break;
    case 3:
      globalStyle['@m1'] = { ...globalStyle['@m1'], [key]: rvw(values[0]) };
      globalStyle['@m2'] = { ...globalStyle['@m2'], [key]: rvw(values[1]) };
      globalStyle['@m3'] = {
        ...globalStyle['@m3'],
        [key]: origin(values[2]),
      };
      break;
    default:
      throw new Error(`invalid para:${JSON.stringify(values)} `);
  }
  return globalStyle;
};

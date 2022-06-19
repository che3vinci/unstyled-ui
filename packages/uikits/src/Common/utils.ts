import {
  ComponentName,
  ComponentStatus,
  rcss,
  status,
  Theme,
  ThKind,
} from '@c3/css';
import { entries, immutableAssign, omit, toArray } from '@c3/utils';
import classNames from 'classnames';
import { css } from 'styled-components';
export const extractClassNameAndProps = (
  className: string,
  props: { className?: string }
) => ({
  className: classNames(className, props.className),
  ...omit(props, ['className']),
});

export const setComponentCssForStatus = <
  T extends { theme: Theme } = { theme: Theme }
>(
  props: T,
  componentName: ComponentName
) => {
  const comp = props.theme[componentName];
  if (!comp) {
    return [];
  }

  try {
    return entries(comp['status']).map(([sts, value]) =>
      status[sts as ComponentStatus](value)
    );
  } catch (e) {
    console.log('componentName', componentName);
    console.log('comp', comp);
    console.log('comp[\'status\']', comp['status']['normal']);
    console.error(e);
    return [];
  }
};

export const setComponentCssForKind = <
  T extends { theme: Theme } = { theme: Theme }
>(
  props: T,
  componentName: ComponentName,
  kind: ThKind | ThKind[]
) => {
  const comp = props.theme[componentName];
  if (!comp) {
    return '';
  }
  const kinds = toArray(kind);
  const _css = kinds.reduce(
    (acc, k) => immutableAssign(acc, comp['kind']?.[k] || {}),
    {}
  );
  return css`
    ${rcss(_css)}
  `;
};

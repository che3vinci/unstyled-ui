import {
  assert,
  canIUseCss,
  divide,
  entries,
  hasOwn,
  isNullish,
  isNumber,
  pick,
  s,
  toArray,
} from '@c3/utils';
import { css } from 'styled-components';
import { toResponsiveArray } from '..';
import { status } from '../theme/status';
import {
  ComponentStatus,
  componentStatusWithoutNormal,
  Theme,
} from '../theme/types';
import { colorProperties, LINE_HEIGHT_IS_RATIO_THRESHOLD } from './constants';
import { cssPropList } from './cssPropList';
import { rcss } from './rcss';
import { supportedPseEles, _cls_selector, _id_selector } from './selector';
import { shortCutMap } from './shortcutPrty';
import {
  CSSProperties,
  CSSRawInputValueType,
  ICssProps,
  ResponsiveInputValueArrayType,
  ResponsiveInputValueType,
} from './type';

const propertiesSupportKeyword = ['fontSize', 'fontWeight'].concat(
  colorProperties
) as (keyof ICssProps)[];

export type ICssPropsWithTheme<T extends Theme = Theme> = ICssProps & {
  theme: T;
};

export const exRcss = (props: ICssPropsWithTheme<Theme>) => {
  replaceKeyword(propertiesSupportKeyword, props);
  handleShortCutProperties(props);
  handleRoundProperty(props);
  handleAspectRatioProperty(props);
  handleComponentStatus(componentStatusWithoutNormal, props);
  handleTypo(props);
  handleLineHeight(props);

  //handle-selector
  handleClsSelector(props);
  handleIdSelector(props);
  handlePseEleSelector(props);

  return css`
    ${props.css &&
    css`
      ${props.css}
    `}
    ${() =>
      props.dbg &&
      css`
        outline: 1px solid red;
        * {
          outline: 1px solid red;
        }
      `};
    ${() => rcss(pick(props, cssPropList))}
  `;
};

const handleLineHeight = (props: ICssProps) => {
  const lh = props.lineHeight;
  if (isNullish(lh)) {
    return;
  }
  assert(
    !isNullish(props.fontSize),
    'must provide fontSize if you want to use LineHeight'
  );
  props.lineHeight = toArray(props.lineHeight).map((e, idx) => {
    if (+e! > LINE_HEIGHT_IS_RATIO_THRESHOLD) {
      return divide(+e!, toArray(+props.fontSize!)[idx]);
    }
    return e;
  }) as ResponsiveInputValueType;
};

const handleTypo = (props: ICssProps) => {
  if (isNullish(props._typo)) {
    return;
  }
  for (const [property, value] of entries(props._typo)) {
    if (property === 'lineHeight') {
      props[property] = toArray(value).map((e, idx) => {
        if (+e! > LINE_HEIGHT_IS_RATIO_THRESHOLD) {
          return divide(+e!, toArray(+props._typo!.fontSize)[idx]);
        } else {
          return e;
        }
      }) as ResponsiveInputValueType;
    } else {
      props[property] = value;
    }
  }
};

const handleAspectRatioProperty = (props: ICssProps) => {
  //aspect-ratio
  if (props.ar) {
    const ar = toArray(props.ar);
    if (ar.every(e => canIUseCss('aspect-ratio', s(e)))) {
      props.aspectRatio = ar;
      return;
    }

    if (!props.width || toArray(props.width).some(e => !isNumber(e))) {
      throw new Error(
        `width should be supplied,${JSON.stringify(props.width)}`
      );
    }
    const width = toResponsiveArray(props.width);
    props.height = ar.map(
      (e, idx: number) => +width[idx] * (1 / +e)
    ) as ResponsiveInputValueArrayType;
  }
};

const handleRoundProperty = (props: ICssProps) => {
  if (props.round) {
    const round = toResponsiveArray(props.round);
    props.borderRadius = round.map(e =>
      e ? 1000000000 : 0
    ) as ResponsiveInputValueArrayType;
  }
};

const handleShortCutProperties = (props: ICssProps) => {
  entries(shortCutMap).forEach(([shortKey, fullKey]) => {
    if (hasOwn(props, shortKey)) {
      const fullKeys = toArray(fullKey);
      for (const _fullKey of fullKeys) {
        props[_fullKey] = props[shortKey];
      }
      delete props[shortKey];
    }
  });
};

const handleComponentStatus = (
  sts: Exclude<ComponentStatus, 'normal'>[],
  props: ICssProps
) => {
  const r = sts.map(e => status[e](props[e]));
  props.css = [props.css, ...r];
};

const getValueOfKeyword = (
  property: keyof ICssProps, //'bgc':[value,value]
  keywordValue: CSSRawInputValueType,
  props: ICssProps & { theme: Theme }
) => {
  const isColorProperty = colorProperties.includes(property);
  if (isColorProperty) {
    // @ts-ignore
    return props['theme']?.['colors']?.[keywordValue] || keywordValue;
  }
  if (property in props['theme']) {
    //@ts-ignore
    return props['theme']?.[property]?.[keywordValue] || keywordValue;
  }

  return keywordValue;
};

//@param: props is a input-and-output property
const replaceKeyword = (
  properties: (keyof ICssProps)[],
  props: ICssProps & { theme: Theme }
): void => {
  properties.forEach(prty => {
    if (!isNullish(props[prty])) {
      const value = toArray(props[prty]) as ResponsiveInputValueArrayType;
      //@ts-ignore
      props[prty] = value.map(v => {
        return getValueOfKeyword(prty, v, props);
      });
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handlePseEleSelector = (props: ICssProps) => {
  for (const [k, v] of entries(supportedPseEles)) {
    if (props[k]) {
      props.css = [props.css, v.call(null, props[k] as CSSProperties)];
    }
  }
};
const handleClsSelector = (props: ICssProps) => {
  for (const [k, css] of entries(props)) {
    if (k.startsWith('_cls_')) {
      const selectorName = k.replace('_cls_', '');
      //@ts-ignore //FIXME
      props.css = [props.css, _cls_selector(selectorName)(css)];
    }
  }
};
const handleIdSelector = (props: ICssProps) => {
  for (const [k, css] of entries(props)) {
    if (k.startsWith('_id_')) {
      const selectorName = k.replace('_id_', '');
      //@ts-ignore //FIXME
      props.css = [props.css, _id_selector(selectorName)(css)];
    }
  }
};

export const cssProps = exRcss;

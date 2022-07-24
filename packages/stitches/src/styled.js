import React from 'react';
import { internal, createMemo, isVairants as isVariants } from './utils';
import { __DEV__ } from '@c3/utils';

const createCssFunctionMap = createMemo();

/** Returns a function that applies component styles. */
export const createStyledFunction = ({ config, css }) =>
  createCssFunctionMap(config, () => {
    const styled = (...args) => {
      const cssComponent = css(...args);
      const DefaultType = cssComponent[internal].type;

      const styledComponent = React.forwardRef((props, ref) => {
        const Type = (props && props.as) || DefaultType;
        // console.log('styledComponent props', props);
        const newProps = { ...props };
        for (const key of Object.keys(props)) {
          if (
            config.bpMapFnForVariant &&
            Array.isArray(props[key]) &&
            isVariants(key, args.slice(1))
          ) {
            newProps[key] = config.bpMapFnForVariant(props[key]);
          }
        }
        const css = (props && props.css) || {};
        if (config.bpMapFnForStyle) {
          for (const key of Object.keys(css)) {
            if (!Array.isArray(css[key])) {
              continue;
            }
            if (css[key].length === 1) {
              newProps.css = {
                ...newProps.css,
                [key]: css[key][0],
              };
              continue;
            }
            newProps.css = {
              ...newProps.css,
              ...config.bpMapFnForStyle(key, css[key]),
            };
            delete newProps.css[key];
          }
        }

        const { props: forwardProps, deferredInjector } =
          cssComponent(newProps);
        delete forwardProps.as;

        if (typeof Type === 'string' && Type.startsWith('u-')) {
          forwardProps.class = forwardProps.className;
          delete forwardProps.className;
        }

        forwardProps.ref = ref;
        if (__DEV__) {
          // console.log('newprops', newProps);
          // console.log('forwardProps', forwardProps);
        }

        if (deferredInjector) {
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(Type, forwardProps),
            React.createElement(deferredInjector, null)
          );
        }

        return React.createElement(Type, forwardProps);
      });

      const toString = () => cssComponent.selector;

      styledComponent.className = cssComponent.className;
      styledComponent.displayName = `Styled.${
        DefaultType.displayName || DefaultType.name || DefaultType
      }`;
      styledComponent.selector = cssComponent.selector;
      styledComponent.toString = toString;
      styledComponent[internal] = cssComponent[internal];

      return React.memo(styledComponent);
    };

    return styled;
  });

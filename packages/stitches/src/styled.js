import React from 'react';
import { internal, createMemo, isVairants as isVariants } from './utils';
import { isEqual } from 'lodash-es';
import { isUndefined } from '@c3/utils';

const createCssFunctionMap = createMemo();

/** Returns a function that applies component styles. */
export const createStyledFunction = ({ config, css }) =>
  createCssFunctionMap(config, () => {
    const styled = (...args) => {
      const cssComponent = css(...args);
      const DefaultType = cssComponent[internal].type;

      const styledComponent = React.forwardRef((props, ref) => {
        const Type = (props && props.as) || DefaultType;

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
            newProps.css = config.bpMapFnForStyle(key, css[key]);
          }
        }
        console.log('newprops', newProps, config);
        const { props: forwardProps, deferredInjector } = cssComponent(newProps);
        delete forwardProps.as;

        forwardProps.ref = ref;

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

      return React.memo(styledComponent, (prev, next) => {
        const prevKeys = Object.keys(prev);
        const nextKeys = Object.keys(next);
        if (prevKeys.length !== nextKeys.length) {
          return false;
        }

        let eq = true;
        for (const key of prevKeys) {
          if (!nextKeys.includes(key)) {
            eq = false;
            break;
          }
          if (isVariants(key, args.slice(1))) {
            if (!isEqual(prev[key], next[key])) {
              eq = false;
              break;
            } else {
              continue;
            }
          }
          if (key === 'css') {
            if (isUndefined(next[key].isImmutable) || next[key].isImmutable) {
              continue;
            }
          }
          if (next[key] !== prev[key]) {
            eq = false;
            break;
          }
        }
        return eq;
      });
    };

    return styled;
  });

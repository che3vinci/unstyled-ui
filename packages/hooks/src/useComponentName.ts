import React from 'react';

export const isClassComponent = (
  C: React.ComponentType
): C is React.ComponentClass => !!C.prototype?.render;

export const getComponentName = (comp: React.ComponentType) => {
  if (comp.displayName) {
    return comp.displayName;
  }
  if (isClassComponent(comp)) {
    return comp.prototype.constructor.name;
  }
  return comp.name || 'Component';
};

export const useComponentName = (comp: React.ComponentType) => {
  return getComponentName(comp);
};

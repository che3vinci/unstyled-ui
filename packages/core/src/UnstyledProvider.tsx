import {
  convertResponsiveArrayForStyle,
  convertResponsiveArrayForVariant,
  createStitches,
} from '@unstyled-ui/stitches';
import type { CSS, VariantProps } from '@unstyled-ui/stitches';
import type Stitches from '@unstyled-ui/stitches/types/stitches';
import { Typography } from '@unstyled-ui/css';
import React from 'react';

export type Config = Parameters<typeof createStitches>[0];

const config: Config = {
  utils: {
    w: (value: string | number | (string | number)[]) => ({ width: value }),
    typo: (value: Typography) => ({ ...value }),
  },
  breakpoints: [768, 1366],
  bpMapFnForVariant: convertResponsiveArrayForVariant,
  bpMapFnForStyle: convertResponsiveArrayForStyle,
};

export type BaseProps<
  Attr extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> = VariantProps<any> & {
  css?: CSS<typeof config>;
} & Attr;

type CtxValueType = {
  styled: Stitches['styled'];
};

const Ctx = React.createContext<CtxValueType>({
  styled: {} as Stitches['styled'],
});

export const UnstyledProvider = ({ value }: { value: Config }) => {
  const cfg = { ...config, ...(value || {}) };
  const { styled } = createStitches(cfg);
  return <Ctx.Provider value={{ styled }} />;
};

export const useStitches = () => {
  return React.useContext(Ctx);
};

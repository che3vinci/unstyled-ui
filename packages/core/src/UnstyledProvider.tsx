import { createStitches } from '@unstyled-ui/stitches';
import type Stitches from '@unstyled-ui/stitches/types/stitches';
import React from 'react';
import { Config, config } from './configure';

type CtxValueType = {
  styled: Stitches['styled'];
};

const Ctx = React.createContext<CtxValueType>({
  styled: {} as Stitches['styled'],
});


export const UnstyledProvider = ({
  value,
  ...restProps
}: {
  value?: Config;
}) => {
  const cfg = { ...config, ...(value || {}) };
  const { styled } = createStitches(cfg);
  return <Ctx.Provider value={{ styled }} {...restProps} />;
};

export const useStitches = () => {
  return React.useContext(Ctx);
};

import { defaultRule, RcssConvertFn } from './convertRule';
export type CssConfigType = {
  convertRule: RcssConvertFn;
  breakPoints: number[];
  setRule: (rule: RcssConvertFn) => void;
};

export const cssConfig: CssConfigType = {
  convertRule: defaultRule,
  breakPoints: [768, 1366],
  setRule: function (rule: RcssConvertFn) {
    this.convertRule = rule;
  },
};

export const EmptyStringZero = new Proxy(Number, {
  construct(target, args) {
    const zero = new Number(0);
    zero.toString = () => '';
    return zero;
  },
});
export const isEmptyStringZero = (x: any) => +x === 0 && x.toString() === '';

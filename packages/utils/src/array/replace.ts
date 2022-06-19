export const replace = <T>(
  arr: T[],
  condition: (a: T) => boolean,
  value: T
) => {
  const item = arr.find(condition);
  if (!item) {
    return arr;
  }
  return [
    ...arr.slice(0, arr.indexOf(item)),
    value,
    ...arr.slice(arr.indexOf(item) + 1),
  ];
};

// const a = [{a:1},{a:2},{a:3}];
// console.log(replace(a, (a)=>a.a===2, {a:4}));

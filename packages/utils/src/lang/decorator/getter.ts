import { assert, IndexedType } from '../../index';

export const getter = (target: object, propertyKey: string) => {
  assert(
    propertyKey.startsWith('_'),
    'private property must be prefixed with "_"'
  );
  const key = propertyKey.slice(1);
  Object.defineProperty(target, key, {
    get(this: IndexedType) {
      return this[propertyKey];
    },
  });
};

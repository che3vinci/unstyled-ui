export type IsSubType<C, P> = C extends P ? true : false;
export type IsEqual<T1, T2> = [T1] extends [T2]
  ? [T2] extends [T1]
    ? true
    : false
  : false;
export type Expect<T extends true> = T;
export type Debug<T> = { [K in keyof T]: T[K] };

export type IndexedType<T = any> = { [key: string]: T };

// in fact, it is not PlainObject
export type PlainObject<T = any> = { [key: string]: T };

export type NestedPlainObject<T extends object> = {
  [key in keyof object]: T[key] extends object
    ? NestedPlainObject<T[key]>
    : T[key];
};

export type Activable = { active: boolean };
export type Key = string | number;
export type GetValue<T> = T extends { [key: Key]: infer V } ? V : unknown;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Join<A, B> = A extends string | number
  ? B extends string | number
    ? `${A}${'' extends B ? '' : '.'}${B}`
    : never
  : never;

// type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;
export type ArrayIndex = '__ARRAY_INDEX__';
export const arrayIndex = '__ARRAY_INDEX__';

export type RemoveLastX<
  T,
  X extends string | number
> = T extends `${infer P1}${X}` ? `${P1}` : T;

type InnerPath<T> = T extends Array<any>
  ? {
      [K in Exclude<keyof T, symbol>]: `${ArrayIndex}.${InnerPath<T[K]>}`;
    }[Exclude<keyof T, symbol>]
  : T extends object
  ? {
      [K in Exclude<keyof T, symbol>]: `${K}.${InnerPath<T[K]>}`;
    }[Exclude<keyof T, symbol>]
  : '';

export type Path<T> = RemoveLastX<InnerPath<T>, '.'>;

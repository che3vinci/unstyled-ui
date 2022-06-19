import { isNullish, isObject } from '@c3/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isWindow(obj: any): obj is Window {
  return !isNullish(obj) && obj === obj.window;
}

export function isDocument(obj: unknown): obj is Document {
  return isObject(obj) && 'body' in obj;
}

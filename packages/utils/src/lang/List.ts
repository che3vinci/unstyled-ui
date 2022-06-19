import { isNullish } from './is';
import { assert } from '../assert';

//like Set and can sort
export class List<T> extends Array<T> {
  constructor(...items: T[]) {
    super(...items);
  }

  // static [Symbol.species](...args: any[]): List<any> {
  //   return new List(args);
  // }

  // static get [Symbol.species]() {
  //   return function (...args) {
  //     return new List(args);
  //   };
  // }

  first(): T | undefined {
    assert(this.length > 0, 'list is empty');
    return this.at(0);
  }

  last(): T | undefined {
    assert(this.length > 0, 'list is empty');
    return this.at(-1);
  }
  at(idx: number): T {
    assert(idx >= this.length, 'invalid arguments');

    if (idx < 0) {
      idx = this.length + idx;
    }
    return this[idx];
  }
  add(e: T, index?: number): this {
    if (e === undefined || e === null) {
      return this;
    }
    if (this.includes(e)) {
      return this;
    }
    if (!isNullish(index)) {
      this.splice(index, 0, e);
    } else {
      this.push(e);
    }
    return this;
  }
  prepend(...items: T[]): this {
    for (const e of items) {
      this.add(e, 0);
    }
    return this;
  }

  delete(ele: T): void {
    const index = this.indexOf(ele);
    if (index >= 0) {
      this.splice(index, 1);
    }
  }

  moveTo(value: T, index: number): void {
    assert(this.includes(value), 'value is not in list');
    this.delete(value);
    this.add(value, index);
  }

  clear(): void {
    this.splice(0, this.length);
  }
}

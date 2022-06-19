(window as any).CSS = {};

import { patch } from '../patch';

describe('test cases', () => {
  it('should work ', () => {
    const rawResBody = { d: null };
    const mockData = { d: [] };
    expect(patch(rawResBody, mockData)).toEqual({ d: [] });
  });
  it('should work ', () => {
    const rawResBody = { a: { b: null, c: null, d: null } };
    const mockData = { a: { b: 4, c: 'hello', d: [{}, {}] } };
    expect(JSON.stringify(patch(rawResBody, mockData))).toEqual(
      JSON.stringify({ a: { b: Number.NaN, c: '', d: [] } })
    );
  });
  it('should work ', () => {
    const rawResBody = { a: { b: { c: null } }, d: null };
    const mockData = { a: { b: { c: [{ a: 2 }] } }, d: { a: 2 } };
    expect(patch(rawResBody, mockData)).toEqual({
      a: { b: { c: [] } },
      d: { a: Number.NaN },
    });
  });
  it('all elements of array ', () => {
    const rawResBody = {
      list: [
        {
          name: 'x',
          children: null,
        },
        {
          name: 'x1',
          children: null,
        },
      ],
    };
    const mockData = {
      list: [
        {
          name: 'x',
          children: [{}, {}],
        },
      ],
    };
    expect(patch(rawResBody, mockData)).toEqual({
      list: [
        {
          name: 'x',
          children: [],
        },
        {
          name: 'x1',
          children: [],
        },
      ],
    });
  });
});

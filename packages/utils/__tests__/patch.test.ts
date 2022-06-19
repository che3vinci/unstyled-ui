import { patch } from './../src/net/base/patch';
describe('test cases', () => {
  it('should work for object', () => {
    const output = {
      cards: null,
    };
    const attached = {
      cards: [],
      profile: {},
    };
    expect(patch(output, attached)).toEqual({ cards: [], profile: {} });
  });
  it('should work for array', () => {
    const output = [
      {
        cards: null,
      },
    ];
    const attached = [
      {
        cards: [],
        profile: {},
      },
    ];
    expect(patch(output, attached)).toEqual([{ cards: [], profile: {} }]);
  });
  it('should work for array', () => {
    const output = [
      {
        cards: [
          {
            title: 'x',
          },
          {
            title: 'y',
          },
        ],
      },
    ];
    const attached = [
      {
        cards: [],
        profile: {},
      },
    ];
    const x: any = [...output];
    x[0]['profile'] = {};
    expect(patch(output, attached)).toStrictEqual(x);
  });
});

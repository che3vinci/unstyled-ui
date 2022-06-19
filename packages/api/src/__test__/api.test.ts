/* eslint-disable @typescript-eslint/no-var-requires */

globalThis.localStorage.setItem('mock', '1');
jest.setTimeout(10000000);

//@ts-ignore
const axios = require('axios');
const { initMakeApi } = require('../makeApi/api');

const makeApi = initMakeApi({ rawHttp: axios });

describe('test cases', () => {
  it('should work ', async () => {
    const fetchFoo = makeApi({
      method: 'get',
      url: '/foo',
      convert: (raw: any) => raw,
      preCondition: () => true,
      mockData: {
        data: {
          list: [],
          info: {
            list: [{ names: [] }, { names: [1, 3] }, { names: [] }],
          },
          name: 'jinbo',
        },
      },
    });
    const res = await fetchFoo.fetch({ id: 1 });
    console.log('res=', res);
    expect(fetchFoo.defaultData).toEqual({
      data: { list: [], info: { list: [] }, name: '' },
    });
  });
});

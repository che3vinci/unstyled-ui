import axios from 'axios';
import { initMakeApi } from '../api';
(window as any).CSS = {};
window.localStorage.setItem('mock', '1');
const makeApi = initMakeApi(axios);

describe('test cases', () => {
  it.skip('should work ', async () => {
    const fetchFoo = makeApi({
      method: 'get',
      url: '/foo',
      convert: raw => raw,
      preCondition: () => true,
      mockData: {
        data: {
          list: [],
          info: {
            list: [{ names: [] }, { names: [1, 3] }, { names: [] }],
          },
          name: 'jinbo',
        },
      } as any,
    });
    const res = await fetchFoo.fetch({ id: 1 });
    console.log('res=', res);
    expect(fetchFoo.defaultData).toEqual({
      data: { list: [], info: { list: [] }, name: '' },
    });
  });
});

import { __MOCK__ } from '@c3/utils';
import {
  IAPI,
  RawReqParameter,
  RawResBody,
  ReqParameter,
  ResBody,
} from './api';
import { methods } from './methods';
import { patch } from './patch';
import { Method } from './type';
import { ndbg } from './utils';

export type HTTP = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in Method]: (...args: any[]) => Promise<any>;
};
export const makeProxyHttp = (rawHttp: HTTP): HTTP => {
  const proxyHttp = {} as HTTP;
  methods.forEach(method => {
    proxyHttp[method] = new Proxy(rawHttp[method], {
      async apply(
        target,
        thisArg: IAPI<RawReqParameter, ReqParameter, RawResBody, ResBody>,
        args
      ) {
        const url = thisArg.url;
        ndbg(`@network/${method}/${url}`, ...args);
        let res;
        if (__MOCK__) {
          ndbg(`@network/useMockData/${url}`, thisArg);
          res = thisArg.mockData;
        } else {
          res = await target.apply(rawHttp, args);
        }

        const ret = patch(res, thisArg.mockData);
        ndbg(`@network/beforePatch/${url}:`, res);
        ndbg(`@network/afterPatch/${url}`, ret);
        return ret;
      },
    });
  });
  return proxyHttp;
};

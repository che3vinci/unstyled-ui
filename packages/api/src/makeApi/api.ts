import { assert, IndexedType, isNullish, PartialBy } from '@c3/utils';
import { stringify } from 'qs';
import { HTTP, makeProxyHttp } from './http';
import { patch } from './patch';
import { Method } from './type';
import { ndbg } from './utils';

export type RawReqParameter = IndexedType<unknown> | undefined;
export type ReqParameter = IndexedType<unknown> | undefined;
export type RawResBody = IndexedType<unknown>;
export type ResBody = IndexedType<unknown>;

export interface IAPI<
  _RawReqParameter extends RawReqParameter,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends ResBody
> {
  method: Method;
  url: string;
  fetch: (raw: _RawReqParameter) => Promise<_ResBody>;
  defaultData: _ResBody;
  convert?: (response: _RawResBody) => _ResBody;
  genReqParameter?: (
    raw: _RawReqParameter
  ) => Exclude<_ReqParameter, undefined>;
  mockData: _RawResBody;
  __ctx: { rawReqParameter: _RawReqParameter };
  preCondition?: (...args: any[]) => boolean;
}

type MakeApiOption<
  _RawReqParameter extends RawReqParameter,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends ResBody
> = PartialBy<
  Omit<
    IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>,
    'fetch' | '__ctx'
  >,
  'defaultData'
>;

export const _makeApi = <
  _RawReqParameter extends RawReqParameter,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends ResBody
>(
  option: MakeApiOption<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>,
  http: HTTP
): IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody> => {
  const api = option as IAPI<
    _RawReqParameter,
    _ReqParameter,
    _RawResBody,
    _ResBody
  >;

  api.__ctx = { rawReqParameter: {} as _RawReqParameter };
  if (isNullish(api.defaultData)) {
    const patched = patch({}, api.mockData) as _RawResBody;
    api.defaultData = api.convert
      ? api.convert(patched)
      : (patched as unknown as _ResBody);
  }

  api.fetch = async (raw: _RawReqParameter) => {
    api.__ctx = { rawReqParameter: raw };
    let rp = (raw || {}) as Exclude<_ReqParameter, undefined>;
    if (api.genReqParameter) {
      rp = api.genReqParameter.call(api, raw);
    }
    if (api.preCondition && !api.preCondition.call(api)) {
      return api.defaultData;
    }

    let url = option.url;
    assert(!url.includes('?'), 'url should not include query string');

    ndbg('@network/queryData:', rp);

    const IDREG = /\/:(\w+)/;
    if (IDREG.test(url)) {
      url = url.replace(IDREG, (m, p: string) => {
        const id = rp[p];
        assert(!!id, 'please provide the :id parameter');
        delete rp[p];
        return `/${id}`;
      });
    }

    let rawResBody: _RawResBody;
    const _fetch = http[api.method].bind(api);
    if (['get', 'head', 'delete', 'option'].includes(api.method)) {
      rawResBody = await _fetch(`${url}?${stringify(rp)}`);
    } else {
      rawResBody = await _fetch(url, rp);
    }
    try {
      return api.convert
        ? api.convert.call(api, rawResBody)
        : (rawResBody as unknown as _ResBody); //FIXME
    } catch (e) {
      ndbg('@network/convertError: api=', api, e);
      return api.defaultData;
    }
  };

  return api;
};

export type InitMakeApiOption = {
  rawHttp: HTTP;
};
export const initMakeApi = (option: InitMakeApiOption) => {
  const http: HTTP = makeProxyHttp(option.rawHttp);
  return <
    _RawReqParameter extends RawReqParameter,
    _ReqParameter extends ReqParameter,
    _RawResBody extends RawResBody,
    _ResBody extends ResBody
  >(
    option: MakeApiOption<
      _RawReqParameter,
      _ReqParameter,
      _RawResBody,
      _ResBody
    >
  ) =>
    _makeApi<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>(
      option,
      //@ts-ignore :FIXME
      http
    );
};

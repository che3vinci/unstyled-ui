import {
  IAPI,
  RawReqParameter,
  RawResBody,
  ReqParameter,
  ResBody,
} from '@c3/utils';
import { useCallback, useState } from 'react';
import { useSwitch } from './useSwitch';

export const useApi = <
  _RawReqParameter extends RawReqParameter,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends ResBody
>(
  api: IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>
): [
  _ResBody,
  (rp: _RawReqParameter) => Promise<_ResBody>,
  React.Dispatch<React.SetStateAction<_ResBody>>,
  boolean
] => {
  const [data, setData] = useState(api.defaultData);
  const [loading, on, off] = useSwitch(false);
  const fetch = useCallback(
    async (rrp: _RawReqParameter) => {
      try {
        on();
        const res = await api.fetch(rrp);
        if (!res) {
          setData(api.defaultData);
          return api.defaultData;
        }
        setData(res);
        off();
        return res;
      } catch (e) {
        off();
        throw e;
      }
    },
    [off, on, api]
  );

  return [data, fetch, setData, loading];
};

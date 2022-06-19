import axios_, {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { isEmpty } from '../../array';
import { dbg } from '../../dbg';
import { isNullish } from '../../lang';
import { initMakeApi } from './api';
export type Option = {
  config: AxiosRequestConfig;
  interceptor: {
    request?: Parameters<AxiosInterceptorManager<AxiosRequestConfig>['use']>;
    response?: Parameters<AxiosInterceptorManager<AxiosResponse>['use']>;
  };
};
export const makeAxios = (option?: Option) => {
  const {
    config = {},
    interceptor: { request = [], response = [] },
  } = option || { interceptor: { request: [], response: [] } };

  const axios = axios_.create({
    ...{
      // baseURL: '',
      timeout: 0,
      withCredentials: true,
      responseType: 'json',
    },
    ...config,
  });
  let req = request;
  if (!isNullish(request) && isEmpty(request)) {
    req = [
      (_config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && _config.headers) {
          _config.headers.Authorization = `Bearer ${token}`;
        }
        return _config;
      },
    ];
  }
  req && axios.interceptors.request.use(...req);

  let resp = response;
  if (!isNullish(resp) && isEmpty(resp)) {
    resp = [
      (res: AxiosResponse) => {
        const { data } = res;
        dbg(
          '@network/reqUrl:',
          res.request.responseURL || res.request?.custom?.url || res.request
        );
        dbg('@network/response=', data);
        // if (
        //   data.code !== 0 &&
        //   data.code !== 200 &&
        //   data.status !== "ok" &&
        //   data.status !== 1
        // ) {
        //   message.error(data.message);
        //   return Promise.reject(data);
        // }
        return Promise.resolve(data);
      },
      error => {
        const errorMsg = error?.response?.data?.message || error.messae;
        throw new Error(errorMsg);
      },
    ];
  }

  resp && axios.interceptors.response.use(...resp);
  return axios;
};

const makeApi = initMakeApi(makeAxios());
export { makeApi };

import { Form, FormInstance } from 'antd';
import { useCallback } from 'react';
import { FetchFn } from './useFetch';

export const useSubmit = <T>(fetch: FetchFn<T>): [FetchFn<T>, FormInstance] => {
  const [form] = Form.useForm();
  const submit = useCallback(
    async (...args: unknown[]) => {
      return fetch(...args);
    },
    [fetch]
  );
  return [submit, form];
};

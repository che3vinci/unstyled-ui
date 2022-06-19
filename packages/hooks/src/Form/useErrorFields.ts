import { uniq } from '@c3/utils';
import { useCallback, useState } from 'react';
import { FormInstance } from 'antd';
import { InternalNamePath } from 'antd/lib/form/interface';
import { flattenDeep } from 'lodash';

export const useErrorFields = (form: FormInstance) => {
  const [errorFields, setErrorFields] = useState<string[]>([] as string[]);
  const onFieldsChange = useCallback(() => {
    const list = form
      .getFieldsError()
      .filter(e => e.errors.length > 0)
      .map(e => e.name);
    // setErrorFields(uniq(flattenDeep(list)));
  }, [form]);
  return [errorFields, onFieldsChange];
};

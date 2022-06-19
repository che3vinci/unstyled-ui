import { FormInstance } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

export const useIsFieldError = (form: FormInstance, field: NamePath) => {
  if (!field) {
    return false;
  }
  return form.getFieldError(field).length > 0;
};

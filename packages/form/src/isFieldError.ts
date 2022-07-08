import { FormInstance } from 'antd';

export const isFieldError = (form: FormInstance, field: string) => {
  return form.getFieldError(field).length > 0;
};

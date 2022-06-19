import { render, ToastConfig } from './render';

export const toast = {
  // error: (props: ToastConfig) => {
  //   render({ ...props, color: 'red' });
  // },
  // success: (props: ToastConfig) => {
  //   render({ ...props, color: 'green' });
  // },
  // loading: (props: ToastConfig) => {
  //   render({ ...props, color: 'blue' });
  // },
  show(props: ToastConfig) {
    render(props);
  },
};

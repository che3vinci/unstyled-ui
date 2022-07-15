import React from 'react';
import { Modal, ModalProps } from './Modal';
import { useModal } from './useModal';
export default {
  component: Modal,
  title: 'Modal',
};

const ModalApp = props => {
  const [modal, on, off] = useModal(
    props.modalProps,
    props.afterDisappear,
    props.beforeAppear
  );
  return (
    <div>
      {modal}
      <button onClick={on}>showModal</button>
      <button onClick={off}>hide</button>
    </div>
  );
};
const Template = (args: any) => <ModalApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  modalProps: {
    closeBtn: <button>close</button>,
    cancelBtn: <button>cancel</button>,
    body: <div>hello,world</div>,
    css: { color: 'WhiteSmoke' },
  } as ModalProps,
  beforeAppear: () => {
    console.log('before appear');
  },
};

import { wait } from '@c3/utils';
import { Box } from '@unstyled-ui/layout';
import React, { forwardRef, useEffect } from 'react';
import { useTransition } from '../../../animation/src/transition/useTransition';
import { Modal, ModalProps } from './Modal';
import { useModal } from './useModal';
import anime from 'animejs/lib/anime.es.js';
import { useMount } from '@c3/hooks';
import { useAnime } from '../../../animation/src/useAnime';
export default {
  component: Modal,
  title: 'uikits/Modal',
};

export const ModalApp = props => {
  const [css, forward, backward] = useTransition(
    { opacity: 0, transform: 'scale(0) rotate(0)' },
    { opacity: 0.8, transform: 'scale(1) rotate(360deg)' },
    'all 300ms ease-in-out'
  );
  const [modal, on, off] = useModal({
    closeBtn: (
      <button
        onClick={async () => {
          backward();
          await wait(4000);
        }}
      >
        close
      </button>
    ),
    cancelBtn: <button>cancel</button>,
    body: <Box css={{ w: 400, h: 300, background: 'black' }}>hello,world</Box>,
    css: { color: 'WhiteSmoke', ...css },
  });
  return (
    <div>
      {modal}
      <button
        onClick={async () => {
          on();
          setTimeout(forward, 0);
        }}
      >
        showModal
      </button>
    </div>
  );
};

export const ModalApp2UseAnimeCumstmize = props => {
  const [forward, backward] = useAnime(
    'u-modal',
    { scale: 0, easing: 'linear', duration: 200 },
    { scale: 1 }
  );
  const [modal, on, off] = useModal({
    closeBtn: (
      <button
        onClick={async () => {
          backward();
          await wait(200);
        }}
      >
        close
      </button>
    ),
    cancelBtn: <button>cancel</button>,
    body: (
      <Box css={{ w: 400, h: 300, background: 'black' }} className="hello">
        hello,world
      </Box>
    ),
    css: { color: 'WhiteSmoke' },
  });

  return (
    <div>
      {modal}
      <button
        onClick={async () => {
          on();
          forward();
        }}
      >
        showModal
      </button>
    </div>
  );
};

export const ModalAppDefault = props => {
  const [modal, on, off] = useModal({
    closeBtn: <button>close</button>,
    cancelBtn: <button>cancel</button>,
    body: <Box css={{ w: 400, h: 300, background: 'black' }}>hello,world</Box>,
    css: { color: 'WhiteSmoke' },
  });

  return (
    <div>
      {modal}
      <button
        onClick={async () => {
          on();
        }}
      >
        showModal
      </button>
    </div>
  );
};

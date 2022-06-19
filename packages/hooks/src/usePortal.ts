import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const usePortal = (popWnd: React.ReactNode) => {
  const [portal, setPortal] = useState<React.ReactPortal>();
  const show = (container?: Element) => {
    setPortal(ReactDOM.createPortal(popWnd, container || document.body));
  };
  const close = (container?: Element) => {
    setPortal(ReactDOM.createPortal(null, container || document.body));
  };
  return [portal, show, close] as const;
};

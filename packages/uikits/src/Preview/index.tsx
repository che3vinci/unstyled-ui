// import { mask } from '@styless/css/mask';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Mask = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;
const Preview: React.FC = props => {
  const ref = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<React.ReactNode>();

  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName.toLowerCase() === 'img') {
      return;
    }
    setPreview(ReactDOM.createPortal(null, document.body));
  };
  const show = () => {
    setPreview(ReactDOM.createPortal(MaskComp, document.body));
  };

  const imgsrc = (ref.current && ref.current.querySelector('img')!.src) || '';
  const MaskComp = (
    <Mask onClick={close}>
      <img src={imgsrc}></img>
    </Mask>
  );
  return (
    <>
      <div onClick={show} ref={ref}>
        {props.children}
      </div>
      {preview}
    </>
  );
};
export default Preview;

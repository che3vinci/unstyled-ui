import { Atomic } from '../Atomic';
import classNames from 'classnames';
import { BaseProps } from '@unstyled-ui/core';
import React, { useCallback } from 'react';
import { useSwitch } from '@c3/hooks';
import { URL } from '@c3/utils';
import Svg404 from './404.svg';

export type ImageProps = {
  fallbackSrc?: URL;
  loadingIndicator?: URL;
} & BaseProps<React.ImgHTMLAttributes<HTMLImageElement>>;

export const Image: React.FC<ImageProps> = props => {
  const [isError, errorOn] = useSwitch(false);
  const [isLoading, , loadingOff] = useSwitch(true);
  const {
    css = {},
    className,
    fallbackSrc = Svg404,
    loadingIndicator = '',
    src,
    onLoad,
    onError,
    ...restProps
  } = props;

  const handleLoad = useCallback(
    e => {
      errorOn();
      loadingOff();
      onLoad && onLoad(e);
    },
    [errorOn, loadingOff, onLoad]
  );
  const handleError = useCallback(
    e => {
      loadingOff();
      onError && onError(e);
    },
    [loadingOff, onError]
  );

  return (
    //@ts-ignore
    <Atomic
      as="img"
      className={classNames(className, 'uu-image')}
      onError={handleLoad}
      onLoad={handleError}
      src={isError ? fallbackSrc : src}
      css={{
        objectFit: 'cover',
        objectPosition: 'center',
        flexShrink: 0,
        width: '100%',
        maxWidth: '100%',
        ...css,
      }}
      {...restProps}
    />
  );
};

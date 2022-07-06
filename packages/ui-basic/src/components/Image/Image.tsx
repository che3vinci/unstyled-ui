import { Atomic } from '../Atomic';
import classNames from 'classnames';
import { BaseProps } from '../../stitches';
import React from 'react';

export type ImageProps = BaseProps<React.ImgHTMLAttributes<HTMLImageElement>>;

export const Image: React.FC<ImageProps> = props => {
  const { css, className, ...restProps } = props;
  return (
    <Atomic
      as="img"
      className={classNames(className, 'c3-image')}
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

import { useSwitch } from '@c3/hooks';
import React, { useCallback, useMemo } from 'react';
import { Button, ButtonProps } from './Button';

export type UseBtnOption = {
  props: ButtonProps;
  useLoading: boolean;
};
export const useButton = (option: UseBtnOption): JSX.Element => {
  const { props, useLoading } = option;
  const [loading, showLoading, hideLoading] = useSwitch(false);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        useLoading && showLoading();
        props.onClick && (await props.onClick(e));
      } finally {
        useLoading && hideLoading();
      }
    },
    [hideLoading, props, showLoading, useLoading]
  );

  const btn = useMemo(() => {
    return <Button {...option.props} loading={loading} onClick={onClick} />;
  }, [loading, onClick, option.props]);

  return btn;
};

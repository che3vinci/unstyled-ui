import { useSwitch } from '@c3/hooks';
import { wait } from '@c3/utils';
import React, { useCallback, useMemo } from 'react';

export type UseBtnOption = {
  useLoading: boolean;
};
export const useButton = (
  btn: JSX.Element,
  option: UseBtnOption
): JSX.Element => {
  const { useLoading } = option;
  const [loading, showLoading, hideLoading] = useSwitch(false);
  console.log('loading', loading, useLoading);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      // console.log('click', loading, useLoading);
      try {
        useLoading && showLoading();
        btn.props.onClick && (await btn.props.onClick(e));
      } finally {
        useLoading && hideLoading();
      }
    },
    [btn.props, hideLoading, showLoading, useLoading]
  );

  const button = useMemo(() => {
    return <btn.type {...btn.props} loading={loading} onClick={onClick} />;
  }, [btn, loading, onClick]);

  return button;
};

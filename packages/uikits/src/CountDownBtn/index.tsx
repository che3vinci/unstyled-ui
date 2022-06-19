import { useCountDown } from '@c3/hooks';
import React, { useCallback, useEffect } from 'react';
import { Button, IButtonProps } from '..';

export interface ICountDownProps extends Omit<IButtonProps, 'onChange'> {
  defaultText: string;
  onStart?: () => void;
  onFinish?: () => void;
  onChange?: (left: number) => void;
  beforeStartCheck?: () => Promise<boolean>;

  count: number;
  preventDefault?: boolean;
}
export const CountDownBtn: React.FC<ICountDownProps> = ({
  defaultText,
  onFinish,
  onStart,
  count,
  beforeStartCheck,
  onChange,
  preventDefault,
  ...props
}) => {
  const [leftCount, started, start, finish] = useCountDown(count);
  const isFinished = leftCount === 0;
  useEffect(() => {
    onChange && onChange(leftCount);
    if (isFinished) {
      finish();
      onFinish && onFinish();
    }
  }, [finish, isFinished, leftCount, onChange, onFinish]);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      if (preventDefault) {
        e.preventDefault();
      }
      if (!started) {
        if (beforeStartCheck) {
          if (!(await beforeStartCheck())) {
            return;
          }
        }
        start();
        onStart && onStart();
      }
    },
    [beforeStartCheck, onStart, preventDefault, start, started]
  );

  return (
    <Button {...props} onClick={onClick}>
      {started ? `${leftCount}s Resend` : defaultText}
    </Button>
  );
};

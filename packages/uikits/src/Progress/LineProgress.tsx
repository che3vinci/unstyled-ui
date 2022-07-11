import { hidden } from '@unstyled-ui/css';
import { assert, isDecimal, multiply } from '@c3/utils';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Row, absYCenter } from '@unstyled-ui/layout';
import { Text } from '@unstyled-ui/atomic';

const PADDING = 10;
export type LineProgressProps = {
  progress: number;
  progressProps?: BaseProps;
  showInfo?: boolean;
} & BaseProps;

export const LineProgress: React.FC<LineProgressProps> = ({
  progress,
  progressProps = { width: '100%', height: '1em' },
  showInfo = true,
  ...props
}) => {
  assert(
    isDecimal(progress) || progress === 0 || progress === 1,
    `invalid args ${progress}. progress must be decimal`
  );
  const { width = [] } = props;
  const textRef = useRef<HTMLParagraphElement>();
  const barRef = useRef<HTMLDivElement>();
  const [textWidth, setTextWidth] = useState(0);
  const [innerBarWidth, setInnerBarWidth] = useState(0);

  let _progress = +Math.min(1, +progress.toFixed(2));
  if (Number.isNaN(progress)) {
    _progress = 0;
  }
  const percent = `${multiply(_progress, 100)}%`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    setTextWidth(textRef.current.offsetWidth);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!barRef.current) {
      return;
    }
    setInnerBarWidth(barRef.current.offsetWidth * _progress);
  });

  const pos = useMemo(() => {
    if (!barRef?.current?.offsetWidth) {
      return { left: 0 };
    }
    const canContain = textWidth + 2 * PADDING < innerBarWidth;
    if (!canContain) {
      return {
        left: innerBarWidth + PADDING,
      };
    }
    return {
      right: PADDING,
    };
  }, [innerBarWidth, textWidth]);

  return (
    <Row
      css={{
        fx: 'flex-start',
        round: true,
        background: 'rgba(0,0,0,0.1)',
        overflow: 'hidden',
      }}
      ref={barRef}
      {...props}
    >
      <Row
        css={{
          round: true,
          width: percent,
          height: '100%',
          fx: 'flex-end',
          position: 'relative',
        }}
        className="cur-progress"
        {...progressProps}
        test-id="cur-progress"
      >
        <Text
          className="info"
          css={{
            textAlign: 'right',
            ...absYCenter(pos),
            ...(!showInfo && hidden),
          }}
          ref={textRef}
        >
          {percent}
        </Text>
      </Row>
    </Row>
  );
};

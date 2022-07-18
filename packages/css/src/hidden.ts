import { CSSProperties } from '@unstyled-ui/core';
export const hidden: CSSProperties = {
  display: 'none',
};

export const show = (visibility: boolean): CSSProperties => ({
  visibility: visibility ? 'visible' : 'hidden',
});

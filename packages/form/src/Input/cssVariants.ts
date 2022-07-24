export const statusVariants = {
  status: {
    error: {
      border: '1px solid $red500',
      '&:focus-within': { border: '1px solid $red500' },
    },
    success: {
      border: '1px solid $green500',
      '&:focus-within': { border: '1px solid $green500' },
    },
  },
};

export const focused = {
  '&:focus-within': {
    border: '1px solid $gray500',
  },
};

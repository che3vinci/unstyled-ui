export const button = (disabled = false) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    height: '1.6em',
    padding: '0 0.8em',
    backgroundColor: 'transparent',
  };
};

export const assert: (
  condition: boolean,
  message?: string,
  extra?: any
) => asserts condition = (
  condition: boolean,
  message = 'error',
  extra?: any
): asserts condition => {
  if (!condition) {
    extra && console.warn('extra info=>',extra);
    throw new Error(`AssertError:${message}`);
  }
};

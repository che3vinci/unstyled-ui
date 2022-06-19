export function wait(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), timeout);
  });
}

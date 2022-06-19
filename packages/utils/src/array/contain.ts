export const contain = <T>(container: T[], sub: T[]) =>
  sub.every(e => container.includes(e));

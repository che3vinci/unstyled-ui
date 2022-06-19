import { cdbg } from '../../dbg';

export const ndbg = (...args: any[]): void => cdbg(...args)('@network');

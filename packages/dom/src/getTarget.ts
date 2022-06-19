export const getTarget = <T extends HTMLElement>(e: Event): T => e.target as T;

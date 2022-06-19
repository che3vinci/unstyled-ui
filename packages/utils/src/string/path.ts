import { REGEX } from './reg';
export const REG_IS_HTTP_FILE = /^https?:/;

export const getFileName = (path: string) => {
  const res = path.match(REGEX.FILENAME_IN_PATH);
  if (!res) {
    throw new Error('invalid path string:' + path);
  }
  return res[0];
};

export const isHttpFile = (path: string) => REG_IS_HTTP_FILE.test(path);

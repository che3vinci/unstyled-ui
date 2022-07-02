import fs from 'fs';

export const replaceTextInFile = (
  file: string,
  search: RegExp,
  replace: string
) => {
  const content = fs.readFileSync(file, 'utf8');
  const newContent = content.replace(search, replace);
  fs.writeFileSync(file, newContent);
};

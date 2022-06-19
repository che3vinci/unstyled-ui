// Convert line breaks to same format \n
export const uniformLineBreaks = (lines: string) =>
  lines.replace(/\r\n?/gm, '\n');

import beautify from 'js-beautify';

export const stripComments = (str: string) =>
  str.replace(/\/\*.*?\*\/\n?/g, '');
export const getCSS = (scope: Document | HTMLElement) =>
  Array.from(scope.querySelectorAll('style'))
    .map(tag => tag.innerHTML)
    .join('\n')
    .replace(/ {/g, '{')
    .replace(/:\s+/g, ':')
    .replace(/:\s+;/g, ':;');
export const getRenderedCSS = () => {
  // diff-optimized
  return beautify.css(stripComments(getCSS(document)), {
    indent_size: 2,
    newline_between_rules: false,
    selector_separator_newline: false,
    space_around_combinator: true,
  });
};

export const resetStyled = (isServer = false) => {
  Array.from(document.querySelectorAll('style')).forEach(
    e => (e.innerHTML = '')
  );
};

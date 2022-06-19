export function injectCSS(css: string) {
  const styleNode = document.createElement('style');
  styleNode.innerHTML = css;
  document.head.appendChild(styleNode);
}

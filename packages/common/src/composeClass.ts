import classNames from 'classnames';

export const composeClass = (
  classname: string,
  props: { className?: string }
) => {
  const { className } = props || {};
  return { className: classNames(className, classname) };
};

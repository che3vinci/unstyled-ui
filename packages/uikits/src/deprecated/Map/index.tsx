import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../Common';
import { Relative } from '../../layout';

export interface IMapProps extends BaseProps {
  elements: JSX.Element[];
  bgComponent: JSX.Element;
}

export const Map: React.FC<IMapProps> = ({
  elements,
  bgComponent,
  className,
  ...props
}) => {
  return (
    <Relative {...props} className={classNames('c3-map', className)}>
      {bgComponent}
      {elements.map(e => (
        <e.type {...e.props} position="absolute" key={e.key} />
      ))}
    </Relative>
  );
};

import React from 'react';
import { BaseProps, extractClassNameAndProps } from '../Common';
import { Col, Row } from '../layout';

export type MediaObjectProps = {
  icon?: React.ReactElement;
  title: React.ReactElement;
  description: React.ReactElement;
  addon?: React.ReactElement;
  contentProps?: BaseProps;
} & BaseProps;

export const MediaObject: React.FC<MediaObjectProps> = props => {
  const { icon, title, description, addon, contentProps, ...restProps } = props;
  return (
    <Row {...restProps}>
      {icon && (
        <icon.type
          {...extractClassNameAndProps('c3-media-object-icon', icon.props)}
        />
      )}
      <Col fx="flex-start" {...contentProps}>
        <title.type
          {...extractClassNameAndProps('c3-media-object-title', title.props)}
        />
        {description}
      </Col>
      {addon && <addon.type alignSelf="flex-end" {...addon.props} />}
    </Row>
  );
};
export default MediaObject;

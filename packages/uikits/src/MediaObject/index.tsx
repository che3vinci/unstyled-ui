import React from 'react';
import { Col, Row } from '@unstyled-ui/layout';
import { BaseProps } from '@unstyled-ui/core';
import classNames from 'classnames';

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
        <icon.type className={classNames('uu-mo-icon', icon.props.className)} />
      )}
      <Col fx="flex-start" {...contentProps}>
        <title.type
          className={classNames('uu-mo-title', title.props.className)}
        />
        {description}
      </Col>
      {addon && <addon.type alignSelf="flex-end" {...addon.props} />}
    </Row>
  );
};
export default MediaObject;

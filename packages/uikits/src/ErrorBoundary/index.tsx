import { absXYCenter } from '@unstyled-ui/layout';
import React from 'react';
import { Text } from '@unstyled-ui/atomic';

export type ErrorState = {
  hasError: boolean;
};
type Props = { children: React.ReactNode };
export class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Text css={{ ...absXYCenter() }} className="uu-error-boundary">
          Something went wrong.
        </Text>
      );
    }

    return this.props.children;
  }
}

export const eb = <T extends object>(Component: React.ComponentType<T>) => {
  const NewComp: React.FC<T> = props => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
  NewComp.displayName = Component.displayName;
  return NewComp;
};

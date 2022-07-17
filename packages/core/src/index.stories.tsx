import React from 'react';
import { styled } from '.';

const Box = styled('div', {
  variants: {
    round: {
      true: {
        borderRadius: '100000px',
      },
    },
  },
});
const Row = styled(Box, { display: 'flex' });

export default {
  component: Box,
  title: 'core/Core',
};

export const Variants = () => (
  <Box round css={{ border: '1px solid red' }}>
    hello
  </Box>
);
export const InheritedVariants = () => (
  <Row round css={{ border: '1px solid red' }}>
    hello
  </Row>
);

export const DeepClsVisitor = () => (
  <Box
    css={{
      '& > .child-1': {
        color: 'red',
      },
      '& .grandson': {
        color: 'green',
      },
    }}
  >
    <div className="child-1" key={1}>
      child1
      <div className="grandson">grandson</div>
    </div>

    <div className="child-2" key={2}>
      child2
    </div>
  </Box>
);

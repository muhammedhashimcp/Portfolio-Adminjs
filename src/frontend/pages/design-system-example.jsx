import { Box, H4 } from '@adminjs/design-system';
import React from 'react';
import { ModalExample } from '../components/design-system-examples';

const DesignSystemExample = () => {
  return (
    <Box m="xl" variant="white">
      <Box>
        <H4>Modal example</H4>
        <ModalExample />
      </Box>
    </Box>
  );
};

export default DesignSystemExample;

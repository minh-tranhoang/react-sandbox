import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import * as React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Canceller } from './components/Canceller';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <Canceller />
      </Grid>
    </Box>
  </ChakraProvider>
);

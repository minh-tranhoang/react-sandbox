import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import * as React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Counter } from './components/Counter';
import { PostStatus } from './components/PostStatus';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <Counter />
        <PostStatus />
      </Grid>
    </Box>
  </ChakraProvider>
);

import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { increase, delayIncrease } from '../actions/counter';

export const Counter = () => {
  const count = useAppSelector(state => state.count);
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleAsyncIncrease = () => {
    dispatch(delayIncrease());
  };

  return (
    <Box>
      <Box>
        <Text p={8}>{count}</Text>
        <Button mr={4} onClick={handleIncrease}>
          Increase
        </Button>
        <Button onClick={handleAsyncIncrease}>Async Increase</Button>
      </Box>
    </Box>
  );
};

import { Box, Button, Text } from '@chakra-ui/react';
import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { sendRequest, cancelRequest } from '../actions/apiActions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Spinner } from '@chakra-ui/react';
export const Canceller = () => {
  const requestStatus = useAppSelector(state => state.request);
  const dispatch = useAppDispatch();
  const doRequest = bindActionCreators(sendRequest, dispatch);
  const doCancel = bindActionCreators(cancelRequest, dispatch);

  const handleSendRequest = () => {
    doRequest();
  };

  const handleCancelRequest = () => {
    doCancel();
  };

  console.log('status:', requestStatus);

  return (
    <Box>
      {requestStatus.loading && (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      )}
      <Box>
        <Text p={8}>{requestStatus.message}</Text>

        <Button mr={4} onClick={handleSendRequest}>
          Send request
        </Button>
        <Button mr={4} onClick={handleCancelRequest}>
          Cancel request
        </Button>
      </Box>
    </Box>
  );
};

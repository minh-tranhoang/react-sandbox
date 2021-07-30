import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { sendPost } from '../actions/post';
import { useAppDispatch, useAppSelector } from '../hooks';

export const PostStatus = () => {
  const postStatus = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();

  const handleSendPost = () => {
    dispatch(sendPost());
  };

  return (
    <Box>
      <Box>
        <Text p={8}>{postStatus}</Text>
        <Button mr={4} onClick={handleSendPost}>
          Send post
        </Button>
      </Box>
    </Box>
  );
};

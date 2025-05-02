import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from './context/AuthProvider';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Stack,
  Link,
} from '@chakra-ui/react';

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser('');
    setPwd('');
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Box textAlign="center" mt={10}>
          <Heading>You are logged in!</Heading>
          <Text mt={4}>
            <Link href="#">Go to Home</Link>
          </Text>
        </Box>
      ) : (
        <Box
          maxW="sm"
          mx="auto"
          mt={10}
          p={6}
          boxShadow="md"
          borderRadius="md"
          bg="gray.50"
          _dark={{ bg: "gray.700" }}
        >
          <Text
            color="red.500"
            ref={errRef}
            mb={4}
            display={errMsg ? "block" : "none"}
          >
            {errMsg}
          </Text>

          <Heading mb={6}>Sign In</Heading>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  type="text"
                  id="username"
                  autoComplete="off"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </FormControl>

              <Button colorScheme="blue" type="submit">
                Sign In
              </Button>
            </Stack>
          </form>

          <Text mt={6}>
            Need an account?{' '}
            <Link color="blue.500" href="#">
              Sign Up
            </Link>
          </Text>
        </Box>
      )}
    </>
  );
};

export default Login;

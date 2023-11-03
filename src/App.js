import logo from './logo.svg';
import './App.css';
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Text} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  function generateRandom() {
    let r = (Math.random() + 1).toString(36).substring(7);
    return r;
  }

  function handleOnClickGeneratePassword() {
    setGeneratedPassword(`${username}_${generateRandom()}`);
  }

  return (
    <Flex h={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Box w={'300px'} p={5} borderWidth={1} borderRadius={'md'} boxShadow={'lg'} bg={'#f4f4f4'} color={'#333'} textAlign={'center'}>
        <Text fontSize={'xl'} fontWeight={'bold'} p={2} mb={3} bg={'#0F2C59'} color={'white'} borderRadius={'md'}>
          React Password Generator
        </Text>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input onChange={(ev) => setUsername(ev.target.value)} type='text' />
        </FormControl>

        <Button colorScheme='purple' mt={'4'} w={'full'} onClick={handleOnClickGeneratePassword}>Generate</Button>
          <Text mt={'10'}>We'ed suggest you to use this password:</Text>
          <text>{generatedPassword}</text>
        
      </Box>
    </Flex>
  );
}

export default App;

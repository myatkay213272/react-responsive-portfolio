import React from 'react'
// import Register from './Register'
import Login from './Login'
import { Box, Text, useColorMode ,Button} from '@chakra-ui/react'

const App = () => {

  const {colorMode,toggleColorMode} = useColorMode()


  return (
    <div>
       <Box p={6} textAlign="center">
      <Text mb={4}>Current mode: {colorMode}</Text>
      <Button onClick={toggleColorMode}>
        Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </Box>

   
      <Login/>
      {/* <Register/> */}
    </div>
  )
}

export default App
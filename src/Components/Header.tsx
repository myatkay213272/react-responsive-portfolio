import {
  Stack, useColorMode, useMediaQuery,
  Circle, Text, Flex, Box, Button, Image
} from '@chakra-ui/react'
import logo from "../assets/photo1.jpg"


const Header = () => {

 const {colorMode} = useColorMode()
 const isDark = colorMode === "dark"
 const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

  return (
    
    <Stack>      
    
    <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />


    {/* <Flex 
      direction={isNotSmallScreen ? "row" : "column"}
      spacing="200px" 
      p={isNotSmallScreen ? "32" : "0"}
      alignSelf="flex-start"
      align="center"
      justify="center"
      w="100%"
    >

      <Box mt={isNotSmallScreen ? "0" : 16} align="flex-start">
        <Text fontSize="3xl" fontWeight="semibold">Hi, I am</Text>
        <Text fontSize="5xl" fontWeight="bold" 
          bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text">
          NovaCore
        </Text>
        <Text color={isDark ? "gray.200" : "gray.500"}>
          Would you like suggestions based on a specific theme (e.g. dark mode, AI, minimal, etc.)?
        </Text>
        <Button mt={8} colorScheme='blue' onClick={() => window.open("https://pawan.live")}>
          Click Me
        </Button>
      </Box>

      <Box mx={isNotSmallScreen ? 0 : "center"}>
      <Image 
        mt={isNotSmallScreen ? "0" : "12"}
        mb={isNotSmallScreen ? "0" : "12"} 
        borderRadius="full"
        backgroundColor="transparent" 
        boxShadow="lg" 
        boxSize="300px"
        src={logo}
        alt="Profile Photo"
      />
    </Box>

    </Flex> */}


<Flex 
  direction={isNotSmallScreen ? "row" : "column"}
  spacing="200px" 
  p={isNotSmallScreen ? "32" : "0"}
  align="center"
  justify="center"
  w="100%"
>
  {/* Text First - Always First */}
  <Box mt={isNotSmallScreen ? "0" : 16} align={isNotSmallScreen ? "flex-start" : "center"}>
    <Text fontSize="3xl" fontWeight="semibold">Hi, I am</Text>
    <Text fontSize="5xl" fontWeight="bold" 
      bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text">
      NovaCore
    </Text>
    <Text color={isDark ? "gray.200" : "gray.500"}>
      Would you like suggestions based on a specific theme (e.g. dark mode, AI, minimal, etc.)?
    </Text>
    <Button mt={8} colorScheme='blue' onClick={() => window.open("https://pawan.live")}>
      Click Me
    </Button>
  </Box>

  {/* Image Second - Always After Text */}
  <Box mx={isNotSmallScreen ? 0 : "auto"} mt={isNotSmallScreen ? "0" : "12"} mb={isNotSmallScreen ? "0" : "12"}>
    <Image 
      borderRadius="full"
      backgroundColor="transparent" 
      boxShadow="lg" 
      boxSize="300px"
      src={logo}
      alt="Profile Photo"
    />
  </Box>
</Flex>


      
    </Stack>

  )
}

export default Header
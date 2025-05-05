import { Box, Flex, Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (

    <VStack p={5}>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.300">ByteProfile</Heading>

        <Box mr="8" display="flex" gap={4}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <IconButton
            icon={<FontAwesomeIcon icon={isDark ? faSun : faMoon} />}
            isRound={true}
            size="sm"
            onClick={toggleColorMode}
            aria-label="Toggle dark mode"
          />
      </Box>
      </Flex>

      <Header/>
      <Social/>
      <Profile/>
    </VStack>

  );
}

export default App;

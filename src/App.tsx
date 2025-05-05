import { Flex, Heading, IconButton, VStack } from "@chakra-ui/react"
import { faSun,faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub ,faLinkedin }from "@fortawesome/free-brands-svg-icons";
const App = () => {


  return (
   
  <VStack p={5}>
    <Flex w="100%" justifyContent="space-between">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan">
            IntheTop
        </Heading>

        <FontAwesomeIcon icon={faInstagram}/>


    </Flex>
    </VStack>
  )
}

export default App
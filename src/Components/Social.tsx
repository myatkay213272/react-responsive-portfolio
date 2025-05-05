import { HStack } from '@chakra-ui/react'
import { faGoogle,faSpotify,faFacebook,faShopify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Social = () => {
  return (
    

    <HStack spacing="18">

    <FontAwesomeIcon icon={faFacebook} boxSize="50"/>
    <FontAwesomeIcon icon={faGoogle} boxSize="50"/>
    <FontAwesomeIcon icon={faSpotify} boxSize="50"/>
    <FontAwesomeIcon icon={faShopify} boxSize="50"/>


    </HStack>

  )
}

export default Social
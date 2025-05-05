import { HStack } from '@chakra-ui/react'
import { faGoogle,faSpotify,faFacebook,faShopify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Social = () => {
  return (
    

    <HStack spacing="40px">
        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '40px' }} />
        <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '40px' }} />
        <FontAwesomeIcon icon={faSpotify} style={{ fontSize: '40px' }} />
        <FontAwesomeIcon icon={faShopify} style={{ fontSize: '40px' }} />
    </HStack>


  )
}

export default Social
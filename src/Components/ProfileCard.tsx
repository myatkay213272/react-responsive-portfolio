// ProfileCard.js
import { Flex, Box, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileCard = ({ bg, hoverBg, icon, label, textColor = "black" }) => (
  <Flex
    rounded="2xl"
    direction="column"
    mt={4}
    bg={bg}
    _hover={{ bg: hoverBg, transform: "scale(1.05)" }}
    transition="all 0.3s ease"
    h={{ base: "200px", md: "250px" }}
    w={{ base: "200px", md: "250px" }}
    justify="center"
    align="center"
    boxShadow="lg"
  >
    <Box mb={3}>
      <FontAwesomeIcon icon={icon} size="2x" color="white" />
    </Box>
    <Text color={textColor} fontSize="xl" fontWeight="semibold">
      {label}
    </Text>
  </Flex>
);

export default ProfileCard;

// Profile.js
import { Box, Heading, Text, useMediaQuery, Flex } from '@chakra-ui/react';
import { faAndroid, faCodepen, faServicestack} from '@fortawesome/free-brands-svg-icons';
import ProfileCard from './ProfileCard';

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxW="1300px"
      mx="auto"
      px={4}
      py={8}
    >
      <Box textAlign="center" py={8} flex="1">
        <Heading fontWeight="extrabold" color="cyan.500" fontSize="5xl">
          7+
        </Heading>
        <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
      </Box>

      <Box py={8} flex="2">
        <Text fontWeight="bold" fontSize="xl" mb={6} textAlign={isNotSmallerScreen ? "left" : "center"}>
          Small daily changes can lead to big results.
        </Text>

        <Flex gap={6} justify={isNotSmallerScreen ? "flex-start" : "center"} wrap="wrap">
          <ProfileCard
            bg="gray.700"
            hoverBg="gray.600"
            icon={faCodepen}
            label="Frontend Developer"
            textColor="white"
          />
          <ProfileCard
            bg="green.500"
            hoverBg="green.400"
            icon={faAndroid}
            label="Android Developer"
            textColor="white"
          />
           <ProfileCard
            bg="blue.500"
            hoverBg="blue.400"
            icon={faServicestack}  
            label="Backend Developer"
            textColor="white"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;

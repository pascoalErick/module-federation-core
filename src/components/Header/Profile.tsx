import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Erick Pascoal</Text>
          <Text color="gray.500" fontSize="small">
            erix_ps@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Erick Pascoal"
        src="https://github.com/erickpascoal.png"
      />
    </Flex>
  );
}

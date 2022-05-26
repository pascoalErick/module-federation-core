import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Logo
      <Text as="span" ml="1" color="#dd6b20">
        Aqui
      </Text>
    </Text>
  );
}

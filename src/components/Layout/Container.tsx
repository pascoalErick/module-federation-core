import { Flex, FlexProps } from "@chakra-ui/react";

type ContainerProps = FlexProps;

export function Container({ children, ...restProps }: ContainerProps) {
  return (
    <Flex w="100%" maxWidth={1480} mx="auto" px={["2", "6"]} {...restProps}>
      {children}
    </Flex>
  );
}

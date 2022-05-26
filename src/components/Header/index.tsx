import {
  Button,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Container } from "../Layout/Container";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";

export function Header() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Container as="header" mx="auto" h="20" mt="4" align="center">
      {!isWideScreen && (
        <IconButton
          aria-label="Abrir navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Container>
  );
}

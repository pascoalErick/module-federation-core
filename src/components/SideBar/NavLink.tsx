import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { ActiveLink } from "./ActiveLink";

type NavLinkProps = {
  icon?: ElementType;
  children: string;
  to: string;
} & ChakraLinkProps;

export function NavLink({ children, icon, to, ...restProps }: NavLinkProps) {
  const { onClose } = useSidebarDrawer();
  const location = useLocation();

  return (
    <ActiveLink isActive={location.pathname.startsWith(to)}>
      <ChakraLink
        as={RouterLink}
        display="flex"
        alignItems="center"
        to={to}
        onClick={() => !!onClose && onClose()}
        {...restProps}
      >
        {!!icon && <Icon as={icon} fontSize="20" />}

        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}

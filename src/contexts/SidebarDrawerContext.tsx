import React from "react";
import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
// import { useRouter } from "next/router";
import { createContext, ReactNode, useContext } from "react";

type SidebarDrawerProviderProps = {
  children: ReactNode;
};

const SidebaDrawerContext = createContext<UseDisclosureProps>(
  {} as UseDisclosureProps
);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  // const router = useRouter();

  // React.useEffect(() => {
  //   disclosure.onClose;
  // }, [disclosure.onClose, router.asPath]);

  return (
    <SidebaDrawerContext.Provider value={{ ...disclosure }}>
      {children}
    </SidebaDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebaDrawerContext);

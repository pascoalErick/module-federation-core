import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../SideBar/index";
import { Container } from "./Container";

export type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />
      <Container>
        <Box>
          <Sidebar />
        </Box>
        <Box w="100%">{children}</Box>
      </Container>
      {/* <Parcel config={() => System.import("@eps/footer")}></Parcel> */}
    </Box>
  );
}

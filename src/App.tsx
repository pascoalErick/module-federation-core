import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { Router } from "./routes";

const App = () => {
  return (
    <ChakraProvider>
      <SidebarDrawerProvider>
        <Router />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
};

export default App;

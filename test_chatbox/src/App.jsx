import React from "react";
import { ChakraProvider, CSSReset, Box, Container } from "@chakra-ui/react";
import ChatButton from "./ChatButton";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Container maxW="container.md" centerContent>
        <Box p={8}>
          <h1>WebApp de Chat</h1>
          <p>Clique no botão abaixo para {<ChatButton />} o chat:</p>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;

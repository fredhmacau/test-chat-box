import React, { useState } from "react";
import { IconButton,Button, Box, Flex, Text,chakra } from "@chakra-ui/react";
import { FaComment, FaTimes } from "react-icons/fa"; // Importe os ícones necessários do react-icons

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <Flex
      flexDirection="column"
      position="fixed"
      bottom="2rem"
      right="2rem"
      zIndex="999"
    >
      <IconButton
        onClick={toggleChat}
        colorScheme="teal"
        border="none"
        
        w={showChat? "3rem":"6rem"}
        h={showChat? "3rem":"6rem"}
        rounded="full"
         // Torna o botão circular
        justifyContent="center"
        alignItems="center"
        icon={
          showChat ? <FaTimes fontSize="1rem" /> : <FaComment fontSize="2rem" />
        } // Alterna o ícone com base no estado de abertura do chat
      ></IconButton>
      {showChat && (
        <Box mt={4}>
          {/* Substitua a URL do iframe com a URL do chat desejado */}
          <Box >
            <chakra.iframe
              title="Chat"
              src="http://localhost:5173/channel/webchannel/c20eac00a76649798a4369c72db954a6"
              width="30rem"
              height="40rem"
              rounded="5px"
            ></chakra.iframe>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default ChatButton;

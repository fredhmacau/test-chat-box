import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {ChakraBaseProvider} from "@chakra-ui/react"
import ChatButton from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider>
    <ChatButton/>
    </ChakraBaseProvider>
  </React.StrictMode>,
)

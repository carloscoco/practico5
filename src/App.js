//import logo from './logo.svg';
import './App.css';
import { ContadorResponsive } from './Components/ContadorResponsive/ContadorResponsive'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <main>
        <ChakraProvider>
                <ContadorResponsive />
        </ChakraProvider>

    </main>
  );
}

export default App;

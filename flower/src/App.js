

import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from "./components/Landing/Footer"
import Home from './components/Landing/Home';
import Navbar from './components/Landing/Navbar';






function App() {
  return (
    <div className="App">
      <ChakraProvider>

      <Navbar />
      <Home/>
      
        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;

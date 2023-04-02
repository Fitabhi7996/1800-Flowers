

import { ChakraProvider } from '@chakra-ui/react';
// import './App.css';
import Footer from "./components/Landing/Footer"

import Navbar from './components/Landing/Navbar';
import AllRoutes from './Routes/AllRoutes';






function App() {
  return (
    <div className="App">
      <ChakraProvider>

      <Navbar />
      <AllRoutes/>
      
        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;

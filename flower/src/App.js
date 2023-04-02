<<<<<<< HEAD

import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from "./components/Landing/Footer"
import Home from './components/Landing/Home';
import Navbar from './components/Landing/Navbar';

=======
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Landing Page/Footer";
import Home from "./Components/Landing Page/Home";
import Navbar from "./Components/Landing Page/Navbar";
import BirthdayCake from "./pages/product";
>>>>>>> c6147a6f998ee79bc2b694ca61ce3497f1d5bc5f

function App() {
  return (
    <div className="App">
      <ChakraProvider>
<<<<<<< HEAD
      <Navbar />
      <Home/>
      
        <Footer/>
=======
        {<Navbar />}
        <Home />
        {/* <BirthdayCake /> */}
        <Footer />
>>>>>>> c6147a6f998ee79bc2b694ca61ce3497f1d5bc5f
      </ChakraProvider>
    </div>
  );
}

export default App;

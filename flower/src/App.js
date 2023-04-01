
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Footer from './Components/Landing Page/Footer';
import Navbar from './Components/Landing Page/Navbar';
import BirthdayCake from './pages/product';
import { Products } from './pages/Products';


function App() {
  return (
    <div className="App">
    <ChakraProvider>
      {<Navbar />}
      {/* <BirthdayCake /> */}
        {/* <Footer /> */}
      </ChakraProvider>
<Products/>
    </div>
  );
}

export default App;

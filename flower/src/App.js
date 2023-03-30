
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Landing Page/Footer';
import Navbar from './Components/Landing Page/Navbar';
import BirthdayCake from './pages/product';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BirthdayCake /> */}

      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;

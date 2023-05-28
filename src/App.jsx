import { ChakraProvider } from '@chakra-ui/react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from "./components";
import Store from "./pages/Store";


const Cart = lazy(() => import("./pages/Cart"));
const History = lazy(() => import("./pages/History"));



function App() {
  return (<ChakraProvider>
    
    <Routes>
      <Route path='/' element={<AppBar />}>
        <Route index path='/' element={<Store/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='history' element={<History/>}/>
      </Route>
      </Routes>
  </ChakraProvider>
  );
}

export default App;

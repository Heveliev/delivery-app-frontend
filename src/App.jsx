import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from "./components";
import {Store,Cart, History} from "./pages";


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

import { NavLink, Outlet} from 'react-router-dom';
import { Suspense } from 'react';
import { Box, Flex, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BoxSpinner } from './BoxSpinner';


const appBarStyles = {
  height: "60px",
  padding: "0 20px",
};


export function AppBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (<>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      {...appBarStyles}
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.800"}
      color={colorMode === "light" ? "black" : "white"}
    ><NavLink to ='/'><Box
        px={4}
        py={2}
        cursor="pointer"
      >Shop</Box></NavLink>
  
     <NavLink to ='/cart'> <Box
        px={4}
        py={2}
        cursor="pointer"
      >Shopping Cart      </Box></NavLink>

     
        <NavLink to ='/history'> <Box
        px={4}
        py={2}
        cursor="pointer"
      >History</Box></NavLink>

      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
        variant="ghost"
      />
    </Flex> <Suspense fallback={<BoxSpinner/>}>
    <Outlet/></Suspense>
    </>
  );
}



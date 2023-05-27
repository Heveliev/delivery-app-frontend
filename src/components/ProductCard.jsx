import {Flex, Box, Text, Stack, Button, Input, Portal, Heading} from "@chakra-ui/react";
import {ModalWindow} from "./ModalWindow";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addStoreName, clearOrder, getIsOpen, getStoreName } from "../redux";
import { isOpenModalSelectStore } from "../redux";

export const ProductCard = ({ id, title, price, currency, store }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const modalSelectStore = useSelector(getIsOpen);
  const storeName = useSelector(getStoreName);


    const handleQuantityChange = (e) => {
      const value = e.target.value;
      setQuantity(value);
    };
  
  
    return (<>
<Flex justifyContent="center">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
          <Box width="100%" height="50px" backgroundColor="red"></Box>
        <Box p="6">
          <Stack spacing={3}>
            <Text fontSize="xl" fontWeight="semibold">
              {title}
            </Text>
            <Text>
              {currency}
              {price}
            </Text>
            <Stack direction="row" alignItems="center">
              <Text>Quantity:</Text>
              <Input
                type="number"
                value={quantity}
                min={1}
                onChange={handleQuantityChange}
                w="60px"
              />
            </Stack>
            <Button colorScheme="teal" onClick={() => {
              if(storeName === "null"){
                dispatch(addStoreName(store))
                dispatch(addProduct({id,title,price,currency,quantity,store}))
                return
              }
              if(store !== storeName){
                dispatch(isOpenModalSelectStore());
                return
              }

              dispatch(addProduct({id,title,price,currency,quantity,store}))
             

            }}>
              Add to cart
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>

        <Portal>
        {modalSelectStore && <ModalWindow >
          <Heading>You add items from another store, your cart will be emptied.
Do you agree?</Heading>
          <Button margin="10px" onClick={()=>dispatch(isOpenModalSelectStore())}>Cancel</Button>
          <Button margin="10px" onClick={()=>{
            dispatch(clearOrder())
            dispatch(isOpenModalSelectStore())
          }}>Ok</Button></ModalWindow>}  
        </Portal>
        
        </>
    );
  };
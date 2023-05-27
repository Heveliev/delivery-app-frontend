import { useDispatch, useSelector } from "react-redux";
import { getStores, oneStore } from "../redux";
import { Button, ButtonGroup, Box, Text } from "@chakra-ui/react";

export const StoresList = () =>{

    const dispatch = useDispatch();
    const stores = useSelector(getStores);

    return(<>
 <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box textAlign="center">
        <Text fontSize="2xl" mb="4">Welcome to Pudge Delivery!!!
Choose store:</Text>
<Text fontSize="2xl" mb="4">Choose store:</Text>
        <ButtonGroup>
          {stores.map(({ _id, store }) => (
            <Button id={_id} key={_id} onClick={()=>{
              dispatch(oneStore(_id))}}>{store}</Button>
          ))}
        </ButtonGroup>
      </Box>
    </Box>
    </>)
}
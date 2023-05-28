import { useDispatch, useSelector } from "react-redux";
import { getStores, oneStore } from "../redux";
import { Button, ButtonGroup, Box, Text, Image} from "@chakra-ui/react";

export const StoresList = () =>{

    const dispatch = useDispatch();
    const stores = useSelector(getStores);

    return(<>
 <Box padding="20px" display="flex" justifyContent="center" alignItems="center" height="100vh">
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
        <Image
        marginBottom="20px"
        src={"https://img2.reactor.cc/pics/post/Dota-2-Pudge-the-Butcher-%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-Pudge-750359.jpeg"}
        alt="Order processing"
            width="500px"
            height="500px"

      />
      </Box>
    </Box>
    </>)
}
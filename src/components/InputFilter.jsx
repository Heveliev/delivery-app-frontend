import { Input,Box,Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { filter } from "../redux";

export const InputFilter = () => {
    const dispatch = useDispatch();

    const filterContacts = evt => {
    const evtTarget = evt.currentTarget.value.toLowerCase();
    dispatch(filter(evtTarget)) 
  }
  
    return (<Box p={4}>
        <Text fontSize="xl" mt={2}>Enter the order number you are looking for:</Text>
      <Input
      placeholder="Enter ordder number"
                onChange={filterContacts}
        type="number"
        mb={4}
      />     
          </Box>
        )
}
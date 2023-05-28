import {Box, FormControl, FormLabel, Input, Button, Heading,Text,Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHistoryState, addSpecificHistoryState, getAllHistory, getFilter, getIsLoadingOrder, } from '../redux';
import {BoxSpinner, InputFilter} from "../components";



 const History = () =>{
    const [next,SetNext] = useState(false);
    const dispatch = useDispatch();
    const history = useSelector(getAllHistory);
    const isLoading = useSelector(getIsLoadingOrder);
    const filter = useSelector(getFilter);


    const filterOrders= () => {
      return history?.filter(item=>item.orderNumber.includes(filter))
}
const total = (price,amount) =>{
    const res = price*amount;
    return res.toFixed(2)
}
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form =  evt.currentTarget;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        if (!phone || !email) {
            alert('Sorry, but you didn&#180;t enter a value in the field')
            return
          }
          dispatch(addSpecificHistoryState({email,phone}))
          form.reset();
          SetNext(!next)
      };
    

    return(<>
    {isLoading ? <BoxSpinner/> : <>{next ?  <Box p={4} maxWidth="md" mx="auto">
        <Button onClick={()=>SetNext(!next)} mb={4}>Back</Button>
        <Heading mb={4}>History orders</Heading>
         <InputFilter/>
          <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={4}
      boxShadow="md"
      maxW="md"
    >
        {filterOrders().length ? filterOrders().map(({id,orderNumber,name,email,phone,address,totalPrice,currency,order})=>( 
        <Box key={id}>
    <Text fontWeight="bold">Order Number: {orderNumber}</Text>
    <Text>Name: {name}</Text>
    <Text>Email: {email}</Text>
    <Text>Phone Number: {phone}</Text>
    <Text>Address: {address}</Text>
    <Text mt={4} fontWeight="bold">
      Products:
    </Text>
    {order.map(({id,name,currency,price,amount}) => (
      <Box key={id} mt={2}>
        <Text>Name: {name}</Text>
        <Text>Price: {price} {currency}</Text>
        <Text>Amount: {amount}</Text>
        <Text>Total Price: { total(price,amount)} {currency}</Text>
      </Box>
    ))}

    <Box mt={4} textAlign="right">
      <Badge colorScheme="green" variant="solid">
      Total price: {totalPrice.toFixed(2)} {currency}
      </Badge>
    </Box></Box>
 )) : <Heading>Sorry but history clear</Heading>}
  </Box>
      </Box> : <Box p={4} maxWidth="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input name="email" type="text" placeholder="Enter Email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Phone</FormLabel>
            <Input name="phone" type="tel" placeholder="Enter phone number" />
          </FormControl>
          <Button type="submit" colorScheme="teal" mr={2}>Send</Button>
          <Button onClick={()=>{
             SetNext(!next);
             dispatch(addHistoryState())
          }
            }>Skip</Button>
        </form>
      </Box>}
</>}
        
    </>)
}


export default History
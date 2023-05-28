import { Box,Flex, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteProduct, updateQuantity, getOrderNumber, getIsLoadingOrder, clearOrder } from "../redux";
import { addOrder } from "../redux";
import {BoxSpinner, AccessOrder} from "../components";

 const Cart = () =>{
const carts = useSelector(getOrders);
const dispatch = useDispatch();
const isLoading = useSelector(getIsLoadingOrder);
const orderNumber = useSelector(getOrderNumber);

const totalPrice = (price,quantity) =>{
const result = (price*quantity).toFixed(2)
if(isNaN(parseFloat(result))){
    return 0
}
return result
    
}


    return(<>
    {isLoading ? <BoxSpinner/> : <>{orderNumber ? <AccessOrder number={orderNumber}/> :  <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Cart
      </Heading>

      <VStack spacing={4} align="stretch">
        {carts.map(({id,title,price,currency,quantity}) => (
          <Box key={id}  boxShadow="md" p={4}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {title}
            </Text>
            <Text>
              Price: {price} {currency}
            </Text>
            <Text>
              Total Price: { totalPrice(price,quantity)} {currency}
            </Text>

            <Flex mt={2}>
              <Text>Quantity:</Text>
              <Input
                type="number"
                min={0}
                ml={2}
                w="60px"
                defaultValue={quantity}
                onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);

                    dispatch(updateQuantity({id, quantity:newQuantity}));
                  }}
              />
                          <Button
                colorScheme="red"
                ml={2}
                onClick={() =>dispatch(deleteProduct(id)) 
                }
              >
                    Delete
              </Button>
            </Flex>
          </Box>
        ))}
      </VStack>

      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>
        Fill out the order form
        </Heading>

       
            <form onSubmit={(evt)=>{
                evt.preventDefault();
                const form = evt.currentTarget;
                const name = form.elements.name.value;
                const email = form.elements.email.value;
                const phone = form.elements.phone.value;
                const address = form.elements.address.value;
                let totalPrice = 0;
                let currency = "$";
                const order = [];
                if (!name || !email || !phone || !address) {
                    alert('Sorry, but you didn&#180;t enter a value in the field')
                    return
                  }
                   carts.map(item=>{
                    if(!item.quantity){
                        dispatch(deleteProduct(item.id));
                    }
                    order.push({price:item.price,name:item.title,amount:item.quantity, _id:item.id})
                   return totalPrice += item.price.toFixed(2) * item.quantity;
                  })

                const data = {name,email,phone,address,totalPrice,currency,order};
                form.reset();

                dispatch(addOrder(data));
                dispatch(clearOrder())

                 return
            }}>
            <VStack spacing={4} align="stretch">
                <Input placeholder="Name" name="name"/>
          <Input placeholder="Email" type="email"  name="email"/>
          <Input placeholder="Phone Number" type="tel" name="phone"/>
          <Input placeholder="Address" name="address"/>
          <Button colorScheme="blue" type="submit">Checkout</Button>
          </VStack>
          </form>
          

      </Box>
    </Box>}</>  
   }
   
    </>)
}



export default Cart;
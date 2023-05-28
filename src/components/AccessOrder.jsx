import { Button,Box, Heading, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { clearOrderNumber } from "../redux";
export const AccessOrder = ({number}) =>{
    const dispatch = useDispatch();

return(
    <>
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box textAlign="center">
    <Heading fontSize="xl" mb={4}>
        Your order is being processed, please wait. Order number {number}
      </Heading>
      <Button  onClick={()=>dispatch(clearOrderNumber())} colorScheme="blue" size="sm">
        OK
      </Button>
      <Image
        src={"https://media-management-service.s3.amazonaws.com/media/images/bd08bd25fd3f525e3cd972b02a3fe653_large_cover.40.original.jpg"}
        alt="Order processing"
            width="500px"
            height="500px"

      />
      </Box>
      </Box>

    </>
)
}
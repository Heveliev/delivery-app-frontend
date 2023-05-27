
import {  Button, Heading, Stack, Center} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { backToSelectStore } from "../redux";
import { getOneStore } from "../redux";

export const OneStore = () =>{
    const dispatch = useDispatch()
    const {store,products} = useSelector(getOneStore);
return(<>
<Button margin="10px" onClick={()=>dispatch(backToSelectStore())}>Back</Button>
<Heading textAlign="center">{store}</Heading>
<Center><Stack spacing={4} direction="row">
    {products.map(({_id,name,price,currency}) =>(
        <ProductCard
        store={store}
        key={_id}
        id={_id}
        imageSrc="https://example.com/product1.jpg"
        title={name}
        price={price}
        currency={currency}
      />
    ))}

    </Stack></Center>

</>)
}
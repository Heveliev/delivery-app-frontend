import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { allStores, getOneStore,getIsLoading  } from "../redux";
import { StoresList, OneStore, BoxSpinner,  } from "../components";




export const Store = () =>{
    const dispatch = useDispatch();
    const loading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(allStores());
    }, [dispatch]);
    const shop = useSelector(getOneStore);

    return(<>
{loading ? <BoxSpinner/> : <>{shop.store ? <OneStore/>  : <StoresList/>}</>}
    
            


    
    
    
    
    

    </>)
}
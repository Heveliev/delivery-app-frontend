import {orderSlice,addProduct, deleteProduct, clearOrder,addStoreName,updateQuantity,clearOrderNumber} from "./slice";
import {getOrders,getStoreName,getOrderNumber,getIsLoadingOrder,getAllHistory} from "./selectors";
import {addOrder,addHistoryState,addSpecificHistoryState} from "./thunk";

export {orderSlice,getOrders,addProduct,deleteProduct,clearOrder,getStoreName,addStoreName,updateQuantity,
    getOrderNumber,getIsLoadingOrder,clearOrderNumber,getAllHistory,addOrder,addHistoryState,addSpecificHistoryState}
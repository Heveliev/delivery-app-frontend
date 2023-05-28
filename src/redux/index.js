import {getStores, getIsLoading,storesSlice,allStores,oneStore,getOneStore,backToSelectStore} from "./shop";
import {getIsOpen,modalSlice,isOpenModalSelectStore} from "./modal";
import {getOrders, orderSlice,addProduct, deleteProduct, clearOrder,getStoreName,
    addStoreName,updateQuantity,getOrderNumber,getIsLoadingOrder,clearOrderNumber,
    getAllHistory,addOrder,addHistoryState,addSpecificHistoryState} from "./order";
import {store, persistor} from "./store";
import  {filterSlice,getFilter,filter} from "./filter";


export {getStores,getIsLoading,storesSlice,allStores,store,
    getIsOpen,modalSlice,isOpenModalSelectStore,oneStore,
    getOneStore,backToSelectStore,persistor,getOrders,orderSlice,addProduct,
    deleteProduct,clearOrder,getStoreName,addStoreName,updateQuantity,getOrderNumber,getIsLoadingOrder,
    clearOrderNumber,getAllHistory,addOrder,addHistoryState,addSpecificHistoryState,filterSlice,getFilter,filter}
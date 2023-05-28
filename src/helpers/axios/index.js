import axios from "axios";
axios.defaults.baseURL = 'https://pudge-delivery.onrender.com';

export const getAllStore = async() =>{
    const result = await axios.get("/api/store");
    return result
}


export const getOneStore = async(id) => {
    const result = await axios.get(`/api/store/${id}/products`);
    return result
}

export const addNewOrder = async(data) => {
    const result = await axios.post("/api/order",data);
    return result
}

export const addHistory = async() =>{
    const result = await axios.get("/api/order");
    return result
}

export const addSpecificHistory = async(data) =>{
    const result = await axios.post("/api/order/specific", data )
    return result
}
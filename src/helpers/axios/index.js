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
import axios from "axios";

export const clientApi = axios.create({
    baseURL: "https://fakestoreapi.com"
})


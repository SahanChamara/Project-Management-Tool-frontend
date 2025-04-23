import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL

const options = {
    baseUrl,
    withCredentials: true,
    timeOut: 10000,
};

const API = axios.create(options)

API.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const {data, status} = error.response;
        if(data === "Unauthorized" && status === 401){
            window.location.href = "/";
        }
        return Promise.reject({
            ...data,
        });
    }
);


export default API;
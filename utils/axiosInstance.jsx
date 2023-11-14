import axios from "axios";

const backendBaseURL = "https://comilla-website-backend.onrender.com";

const axiosInstance = axios.create({
    baseURL: backendBaseURL,
});

export default axiosInstance;

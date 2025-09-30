import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const signupAPI = (data) => api.post("/auth/sign-up", data)
export const loginAPI = (data) => api.post("/auth/login", data)
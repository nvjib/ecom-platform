import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const signup = ({ name, email, password, role }) => {
    return axios.post(`${API_URL}/auth/sign-up`, {
        name, 
        email, 
        password, 
        role
    })
}
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'https://assignment-11-server-zeta-liart.vercel.app',
  withCredentials: true
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut } = useAuth()
  useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
      return res
    }, async error => {
     
      if (error.response.status === 401 || error.response.status === 403) {
        logOut()
        navigate('/login')

      }
    })
  }, [logOut, navigate])
  return axiosSecure

}
export default useAxiosSecure
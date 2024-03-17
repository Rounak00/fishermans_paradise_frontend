import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

const CustomerRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    
  return user.accessToken&&user.role==="customer"? <>{children}</>:<Navigate to="/login"/>
}

export default CustomerRoute
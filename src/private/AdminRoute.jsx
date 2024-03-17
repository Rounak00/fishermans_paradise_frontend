import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

const AdminRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    
  return user.accessToken&&user.role==="admin"? <>{children}</>:<Navigate to="/admin-login"/>
}

export default AdminRoute
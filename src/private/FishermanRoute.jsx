import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

const FishermanRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    
  return user.accessToken&&user.role==="fisherman"? <>{children}</>:<Navigate to="/fisherman-login"/>
}

export default FishermanRoute
import { Button } from "@/components/ui/button"
import { AuthContext } from "@/context/AuthContext"
import Footer from "@/customComponents/Footer"
import { NavBar } from "@/customComponents/NavBar"
import { useContext } from "react"
import { Link } from "react-router-dom"


const Cart = () => {
  const {user}=useContext(AuthContext)
  return (<>
    <NavBar/>
    {user.role?
    (<div className='h-screen'>Cart</div>):
    (
      <p className='h-screen ml-3'>Please Log In First 
        <Link to="/login">
          <Button className="ml-3">Log In</Button>
        </Link>
      </p>
    )}
    
    <Footer/>
    </>
  )
}

export default Cart
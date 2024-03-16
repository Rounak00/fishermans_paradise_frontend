
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CustomerRegister from './Pages/Auth/CustomerRegister'
import Home from "./Pages/User/Home"
import ErrorPage from "./Pages/Special/ErrorPage"
import CustomerLogin from "./Pages/Auth/CustomerLogin"
import FishermanLogin from "./Pages/Auth/FishermanLogin"
import FishermanRegister from "./Pages/Auth/FishermanRegister"
import AdminLogin from "./Pages/Auth/AdminLogin"
import FishermanPage from "./Pages/Special/FishermanPage"
import AdminPage from "./Pages/Special/AdminPage"
import RequireLogin from "./Pages/Auth/RequireLogin"
import ProductFeed from "./Pages/User/ProductFeed"
import Contact from "./Pages/User/Contact"
import About from "./Pages/User/About"
import Cart from "./Pages/User/Cart"

const App = () => {
  
 
  return (
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<CustomerRegister/>}/>
            <Route path="/login" element={<CustomerLogin/>}/>
            <Route path="/require" element={<RequireLogin/>}></Route>
            <Route path="/fisherman-register" element={<FishermanRegister/>}/>
            <Route path="/fisherman-login" element={<FishermanLogin/>}/>
            
       
            <Route path="/fisherman" element={<FishermanPage/>}/>
            <Route path="/admin-login" element={<AdminLogin/>}/>
            <Route path="/admin" element={<AdminPage/>}/>


             <Route path="/product" element={<ProductFeed/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<ErrorPage/>}/>

         </Routes>
     </BrowserRouter>
  )
}

export default App

import {BrowserRouter,Routes,Route} from "react-router-dom"
import CustomerRegister from './Pages/Auth/CustomerRegister'
import Home from "./Pages/User/Home"
import ErrorPage from "./Pages/Special/ErrorPage"
import CustomerLogin from "./Pages/Auth/CustomerLogin"
import FishermanLogin from "./Pages/Auth/FishermanLogin"
import FishermanRegister from "./Pages/Auth/FishermanRegister"
import AdminLogin from "./Pages/Auth/AdminLogin"
import FishermanPage from "./Pages/Fisherman/FishermanPage"
import AdminPage from "./Pages/Admin/AdminPage"
import RequireLogin from "./Pages/Auth/RequireLogin"
import ProductFeed from "./Pages/User/ProductFeed"
import Contact from "./Pages/User/Contact"
import About from "./Pages/User/About"
import Cart from "./Pages/User/Cart"
import AdminRoute from "./private/AdminRoute"
import FishermanRoute from "./private/FishermanRoute"
import CustomerRoute from "./private/CustomerRoute"


const App = () => {
  
 
  return (
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<CustomerRegister/>}/>
            <Route path="/login" element={<CustomerLogin/>}/>
            <Route path="/require" element={<RequireLogin/>}/>
            <Route path="/fisherman-register" element={<FishermanRegister/>}/>
            <Route path="/fisherman-login" element={<FishermanLogin/>}/>
            <Route path="/fisherman" element={<FishermanRoute><FishermanPage/></FishermanRoute>}/>
            <Route path="/admin-login" element={<AdminLogin/>}/>
            <Route path="/adminpage"  element={<AdminRoute><AdminPage/></AdminRoute>} />
            


             <Route path="/product/:productId" element={<ProductFeed/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/cart" element={<CustomerRoute><Cart/></CustomerRoute>}/>
            <Route path="*" element={<ErrorPage/>}/>

         </Routes>
     </BrowserRouter>
  )
}

export default App
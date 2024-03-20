import CartContext from "@/context/CartContext";
import { Cards } from "@/customComponents/Cards";
import Footer from "@/customComponents/Footer";
import { NavBar } from "@/customComponents/NavBar"
import axios from "axios";
import { useContext, useEffect, useState } from "react"


const Home = () => {
  
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    productsFunction();
  },[]);
  
  async function productsFunction(){
     try{
       let res=await axios.get("http://localhost:5000/api/products");
       console.log(res);
       setProducts(res.data);
       console.log(res.data[1]);
     }catch(err){
      console.log(err)
     }
  }
  return (
    <>
      <NavBar/>
      <div className='m-10 flex flex-wrap justify-start gap-10 items-start h-[100vh]'>
           {products?.map((item,index)=>(
              <Cards
               key={index}
               title ={item.title}
               image={item.image}
               detail={item.detail}
               productId={item._id}
               category={item.category}
               weight={item.weight}
               unit={item.unit}
               price={item.price}
              />
           ))}
          
      </div>
      <Footer/>
    </>
    
  )
}

export default Home
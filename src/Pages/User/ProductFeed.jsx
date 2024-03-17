import { Button } from "@/components/ui/button"
import Footer from "@/customComponents/Footer";
import { NavBar } from "@/customComponents/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductFeed = () => {
  const [prod,setProd]=useState({});
  let { productId } = useParams();
  useEffect(()=>{
    loadProduct();
  },[])

  async function loadProduct(){
      try{ 
       let res=await axios.get(`http://localhost:5000/api/product/${productId}`);
       setProd(res.data);
       
      }catch(err){
        console.log(err)
      }
  }
  const buyFunc = () => {
    toast({
      description: "Please Check your Email for payment and delivery schedule",
    });
  };
  return (
    <div>
       <NavBar/>
      <div className='h-auto flex flex-row  items-center justify-around w-auto m-10'>
         <div className=" h-auto w-auto">
             <img className='h-[600px] '
             src={prod.image} alt="Fish Image" />
         </div>
         <div className=' h-[600px] w-auto p-[100px]  flex flex-col justify-center items-start'>
              <h1 className='font-bold text-[20px] pb-6'>{prod.title}</h1>
              <p className=' pb-6'>{prod.detail}</p>
              <p className="font-semibold"> Price: <span className="font-normal">{prod.price}/{prod.weight}{prod.unit}</span></p>
              <p className="font-semibold"> Category: <span className="font-normal">{prod.category}</span></p>

              <div className="mt-[40px] flex flex-row gap-8">
                <Button>Add to Cart</Button>
                <Button className="bg-orange-600 text-white hover:bg-orange-700" onClick={buyFunc}>Buy</Button>
              </div>

         </div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default ProductFeed
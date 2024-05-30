import FSidebar from "@/customComponents/FSidebar";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import FRCards from "@/customComponents/FRCards";







const FishermanRemove = () => {
  const [isApproved,setIsApproved]=useState(false);
  const [isremove,setIsremove]=useState(false)
  const [items,setItems]=useState([]);
  const { user } = useContext(AuthContext);
  
  
  useEffect(()=>{
    ISApproved();
    AllFish();
  },[isremove])

   const ISApproved=async()=>{
     const prof=await axios.get("http://localhost:5000/api/fisherman/profile",
     {headers:{Authorization: "Bearer "+ `${user.accessToken}`}
    })
    setIsApproved(prof.data.approve)
  }

  const AllFish=async()=>{
     try{
        const ele= await axios.get("http://localhost:5000/api/fisherman/getMyProducts",
                                   {headers: {Authorization:"Bearer "+`${user.accessToken}`}});
        setItems(ele.data);
     }catch(err){
        console.log(err);
     }
  }
  
   
  

  return (
    <>
       
       { isApproved? (
        <div className="flex flex-row gap-10">
        <FSidebar />
        <div className='flex  justify-center items-center w-full h-[100vh]'>
             {items.length==0?(
              <div className="font-bold ">
                  <p>No Items is added</p>
              </div>
             ):(

              <div className='flex flex-col mt-[30%]'>
                    
                     {items.length>0&&items.map((item,index)=>( 
                      <FRCards
                         key={index}
                         PID={item._id}
                         title={item.title}
                         detail={item.detail}
                         category={item.category}
                         image={item.image}
                         unit={item.unit}
                         totalQuantity={item.totalQuantity}
                         price={item.price}
                         weight={item.weight}
                         setIsremove={setIsremove}
                      />
                     )
                    )} 
                   
              </div>
            )}
        </div>
      </div>):(
        <div className='w-[100vw] h-[100vh]  flex gap-5 justify-center items-center flex-col'>
          <h1 className="font-bold">Sorry You are Not Approved</h1>
          <p>Wait for admin for approval</p>
          <Link to="/require"><Button className='bg-orange-700 hover:bg-orange-500' >Go Back</Button></Link>
        </div>
      )}
      
      
    </>
  );
};

export default FishermanRemove;

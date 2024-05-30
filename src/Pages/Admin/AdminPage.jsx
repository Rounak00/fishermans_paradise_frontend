
import ASidebar from "@/customComponents/ASidebar"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";

const AdminPage = () => {

   const { user } = useContext(AuthContext);
   const [detail, setDetail] = useState({});
   useEffect(() => {
      adminDashboard();
    }, []);
  
    async function adminDashboard() {
      try {
        let res = await axios.get("http://localhost:5000/api/admin/adminDashboard", { headers: { Authorization: "Bearer " + `${user.accessToken}`} });
        // console.log(res);
        setDetail(res.data);
        // console.log(res.data[1]);
      } catch (err) {
        console.log(err);
      }
    }
 

  return (
    <div className="w-full flex flex-row gap-3">
        <ASidebar/>
        
         <div className="w-full flex  gap-10 flex-col justify-center items-center">
            <div className="mt-10 flex flex-row gap-10">
               <div className="h-[10rem] w-[16rem] bg-orange-500 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                  <p className="text-white font-bold">Number Of Users</p>
                  <p className="text-white font-bold text-2xl">{detail.user}</p>
               </div>
               <div className="h-[10rem] w-[16rem] bg-orange-500 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                  <p className="text-white font-bold">Number Of Fishermans</p>
                  <p className="text-white font-bold text-2xl">{detail.fisherman}</p>
               </div>
               <div className="h-[10rem] w-[16rem] bg-orange-500 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                  <p className="text-white font-bold">Orders in this weak</p>
                  <p className="text-white font-bold text-2xl">146</p>
               </div>
            </div>
            <div className="gap-5 flex flex-row">

                 <div className="h-[12rem] w-[16rem] text-white bg-orange-700 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                    <p className='font-semibold text-xl'>Approved Fisherman </p>
                    <p className='font-semibold text-2xl'>{detail.afisherman}</p>
                  </div>
                  <div className="h-[12rem] w-[16rem] text-white bg-orange-700 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                    <p className='font-semibold text-xl'>Not Approved Fisherman </p>
                    <p className='font-semibold text-2xl'>{detail.nafisherman}</p> 
                  </div>

            </div>
         </div>
        
       
        
    </div>
  )
}

export default AdminPage
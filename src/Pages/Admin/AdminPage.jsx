
import ASidebar from "@/customComponents/ASidebar"

const AdminPage = () => {

 

  return (
    <div className="w-full flex flex-row gap-3">
        <ASidebar/>
        
         <div className="w-full flex  gap-10 flex-col justify-center items-center">
            <div className="mt-10 flex flex-row gap-10">
               <div className="h-[10rem] w-[16rem] bg-orange-500 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                  <p className="text-white font-bold">Number Of Users</p>
                  <p className="text-white font-bold text-2xl">45</p>
               </div>
               <div className="h-[10rem] w-[16rem] bg-orange-500 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                  <p className="text-white font-bold">Number Of Fishermans</p>
                  <p className="text-white font-bold text-2xl">15</p>
               </div>
               <div className="h-[10rem] w-[16rem] bg-orange-500 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                  <p className="text-white font-bold">Orders in this weak</p>
                  <p className="text-white font-bold text-2xl">248</p>
               </div>
            </div>
            <div className="gap-5 flex flex-row">

                 <div className="h-[12rem] w-[16rem] text-white bg-orange-700 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                    <p className='font-semibold text-xl'>Approved Fisherman </p>
                    <p className='font-semibold text-2xl'>10 </p>
                  </div>
                  <div className="h-[12rem] w-[16rem] text-white bg-orange-700 shadow-2xl rounded-lg flex justify-center flex-col items-center">
                    <p className='font-semibold text-xl'>Not Approved Fisherman </p>
                    <p className='font-semibold text-2xl'>5 </p> 
                  </div>

            </div>
         </div>
        
       
        
    </div>
  )
}

export default AdminPage
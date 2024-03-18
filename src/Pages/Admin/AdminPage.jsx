import { AuthContext } from "@/context/AuthContext";
import ASidebar from "@/customComponents/ASidebar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ContentCard from "./ContentCard";

const AdminPage = () => {
  const { user } = useContext(AuthContext);
  const [elements, setElements] = useState([]);
  const [isApprove,setIsApprove]=useState(false);
  useEffect(() => {
    CallerUser();
  }, [isApprove]);

  async function CallerUser() {
    try {
      setIsApprove(false);
      let res = await axios.get(
        "http://localhost:5000/api/admin/notApprovedFishermansList",
        { headers: { Authorization: "Bearer " + `${user.accessToken}`} }
      );
      setElements(res.data);
      console.log(elements)
    } catch (err) {
      console.log(err);
    }
  }


   if(elements.length==0){
      return (
        <div className="flex flex-row gap-10">
        <ASidebar />

        <div className="mt-10">
          <div className=" flex flex-col gap-3"></div>
             <div className="flex gap-5 justify-center items-center flex-col">
               <h1>No More Applicants</h1>
             </div>   
        </div>
      </div>
      )
   }else{
      return (
      <>
        <div className="flex flex-row gap-10">
          <ASidebar />
  
          <div className="mt-10">
            <div className=" flex flex-col gap-3"></div>
               
               {elements.length>0&&elements.map((item,index)=>(
                 <ContentCard 
                   key={index}
                   license={item.license}
                   name={item.name}
                   email={item.email}
                   fid={item._id}
                   setIsApprove={setIsApprove}
                 />
               )     
               )}
               
          </div>
        </div>
      </>
      );
   }

  
};

export default AdminPage;

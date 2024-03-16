import { Button } from "@/components/ui/button"
import { AuthContext } from "@/context/AuthContext";
import axios from "axios"
import { useContext } from "react";





const ContentCard = ({license,name,fid,email}) => {
   const GiveApprove=async()=>{
    const { user } = useContext(AuthContext);
     try{ 
        await axios.put(`http://localhost:5000/api/admin/markApproved/${fid}`,
        { headers: { Authorization: "Bearer " + `${user.accessToken}`}})
     }catch(error){
        console.log(error);
     }
  }
  return (
    <>     
    <div className="flex max-w-2xl m-2 items-center rounded-md border ">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src={license}
          alt="License"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Fisherman ID: {fid}
          </p>
          <div className="mt-4">
          Email : {email}
          </div>
          <div className="mt-3 flex items-center space-x-2">
           <Button onClick={GiveApprove}>Approve</Button>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default ContentCard
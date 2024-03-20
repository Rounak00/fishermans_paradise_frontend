import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useContext } from "react";

// {image, title, detail, price , category, weight, unit, totalQuantity,}

const FRCards = ({
    PID,
    title,
    category,
    image,
    unit,
    totalQuantity,
    price,
    weight,
    setIsremove
}) => {
  const { user } = useContext(AuthContext);
  
  async function RemoveItem () {
      try{
         await axios.delete(`http://localhost:5000/api/fisherman/removeProduct/${PID}`,
         {headers: { Authorization: "Bearer " + `${user.accessToken}`}})
         setIsremove(true)
      }catch(err){
        console.log(err)
      }
   }
  return (
    <>
      <div className="flex max-w-2xl m-4  items-center rounded-md border ">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src={image}
            alt="Image"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {title}
            </h1>
            <p className="mt-3 text-sm text-gray-600">{`Product ID: ${PID}`}</p>
            <div className="mt-4">{`Price : ${price}/${weight} ${unit} `}</div>
            <div className="mt-4">{`Category : ${category}`}</div>
            <div className="mt-4">{`Totatl Quantity Left : ${totalQuantity}`}</div>
            <div className="mt-3 flex items-center space-x-2">
              <Button className='bg-orange-700 hover:bg-orange-500' onClick={RemoveItem}>Remove Item</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FRCards;

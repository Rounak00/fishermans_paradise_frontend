import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import  { Cart } from "@/context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Cards({
  title,
  detail,
  image,
  productId,
  category,
  weight,
  unit,
  price,
}) {
  const { toast } = useToast();
 
  

   
  const buyFunc = () => {
    toast({
      description: "Please Check your Email for payment and delivery schedule",
    });
  };
  return (
    <div className="w-[250px] rounded-md border">
      <Link to={`/product/${productId}`}>
        <img
          src={image}
          alt="Fish"
          className="h-[200px] w-full rounded-md object-cover"
        />
      </Link>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <h4>
          {" "}
          &#8377; {price}/{weight} {unit}
        </h4>
        <p className="mt-3 text-sm text-gray-600">{detail}</p>
        <Button
          type="button"
          className="mt-4 mr-4 rounded-sm bg-primary px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm "
          
        >
          Add to Cart
        </Button>
        <Button
          type="button"
          className="mt-4  rounded-sm bg-orange-600 hover:bg-orange-700 px-3 py-2 text-[12px] font-semibold text-white shadow-sm"
          onClick={buyFunc}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}

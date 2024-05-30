import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../assets/default.jpg";

export function Cards({ data }) {
  const { toast } = useToast();
  const buyFunc = () => {
    toast({
      description: "Please Check your Email for payment and delivery schedule",
    });
  };

  const { dispatch, cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="w-[250px] rounded-md border">
      <Link to={`/product/${data._id}`}>
        <img
          src={data?.image || DefaultImage}
          alt="Fish"
          className="h-[200px] w-full rounded-md object-cover"
        />
      </Link>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{data.title}</h1>
        <h4>
          {" "}
          &#8377; {data.price}/{data.weight} {data.unit}
        </h4>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{`Category : ${data.detail}`}</p>
       
        {cart.includes(data) ? (
          <Button 
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: { id: data?._id },
              })
            }
            type="button"
            variant="destructive"
            className="mt-4 mr-4 bg-orange-500 hover:bg-orange-700 rounded-sm px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm "
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: { item: data } })
            }
            type="button"
            className="mt-4 mr-4 rounded-sm bg-primary px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm "
          >
            Add to Cart
          </Button>
        )}
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

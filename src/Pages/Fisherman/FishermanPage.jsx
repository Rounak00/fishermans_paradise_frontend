import FSidebar from "@/customComponents/FSidebar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { z } from "zod";
import { Input } from "../../components/ui/input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  title: z.string().min(1, { message: "Please Enter Fish Name" }),
  detail: z.string().min(1, { message: "Please Enter Detail" }),
  weight: z.string().min(1, { message: "Please Enter Weight" }),
  totalQuantity: z.string().min(1, { message: "Please Enter Total Quantity" }),
  image: z.any(),
  price:z.string().min(1, { message: "Please Enter Price" }),
  category:z.string().min(1, { message: "Please Enter Category" }),
  unit:z.string().min(1, { message: "Please Enter Unit" })
});




const FishermanPage = () => {
  const { user } = useContext(AuthContext);
  
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })


  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
     
      const convertedData={
        ...data,
        weight:parseInt(data.weight),
        price:parseInt(data.price),
        totalQuantity:parseInt(data.totalQuantity)
      } 

      const formData = new FormData();
      formData.append("title", convertedData.title);
      formData.append("detail", convertedData.detail);
      formData.append("weight", convertedData.weight);
      formData.append("totalQuantity", convertedData.totalQuantity);
      formData.append("category", convertedData.category);
      formData.append("price", convertedData.price);
      formData.append("unit", convertedData.unit);
      formData.append("image", convertedData.image[0]);
    
      
 
      const res=await axios.post(
        `http://localhost:5000/api/fisherman/addProduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer "+ `${user.accessToken}`
          },
        }
      );
      
      console.log(res)
      
      toast({
        description: "Product Added",
      });
      
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Internal Server Error",
      });
    }
  }










  return (
    <>
      <div className="flex flex-row gap-10">
        <FSidebar />
        <div className="flex items-center w-full justify-center">
          <div className="h-max flex flex-col  p-4 justify-center items-center ">
            <h1 className="mt-10">Fisherman Register Form</h1>
            <form
              className="container flex flex-col justify-center items-center mt-10 gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                {...register("title")}
                type="text"
                placeholder="Fish Name"
              />
              {errors.title && (
                <div className="text-red-500">{errors.title.message}</div>
              )}

              <Textarea {...register("detail")} type="text" placeholder="about fish" />
              {errors.detail && (
                <div className="text-red-500">{errors.detail.message}</div>
              )}
              

              <Input
                {...register("weight")}
                type="number"
                placeholder="weight wise sale"
              />
              {errors.weight && (
                <div className="text-red-500">{errors.weight.message}</div>
              )}

              <Input
                {...register("unit")}
                type="text"
                placeholder="Unit wise sale"
              />
              {errors.unit && (
                <div className="text-red-500">{errors.unit.message}</div>
              )}

              <Input
                {...register("totalQuantity")}
                type="number"
                placeholder="Total Quantity"
              />
              {errors.totalQuantity && (
                <div className="text-red-500">{errors.totalQuantity.message}</div>
              )}

              <Input
                {...register("price")}
                type="number"
                placeholder="Price"
              />
              {errors.price && (
                <div className="text-red-500">{errors.price.message}</div>
              )}

              <Input
                {...register("category")}
                type="text"
                placeholder="Category of Fish"
              />
              {errors.category && (
                <div className="text-red-500">{errors.category.message}</div>
              )}

              

              <Input
                {...register("image")}
                type="file"
                placeholder="Upload Fish Picture"
              />
              {errors.image && (
                <div className="text-red-500">{errors.image.message}</div>
              )}

              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
              </Button>

              {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
              )}
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FishermanPage;

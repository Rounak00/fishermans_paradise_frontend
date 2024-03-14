import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { z } from "zod";
import { Input } from "../../components/ui/input";
import axios from "axios";
import { useToast } from "../../components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(1, { message: "Please Enter your Full Name" }),
  email: z.string().min(1, { message: "Please Enter your Email" }),
  password: z.string().min(1, { message: "Please Enter your password" }),
  contact: z.string().min(1, { message: "Please Enter your Contact number" }),
  image: z.any(),
});

const FishermanRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("contact", data.contact);
      formData.append("image", data.image[0]);

      await axios.post(
        `http://localhost:5000/api/auth/fisherman/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast({
        description: "User registered, Please Log In",
      });
      navigate("/fisherman-login");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Internal Server Error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="h-max flex flex-col md:w-1/2 p-4 justify-center items-center ">
        <h1 className="mt-10">Fisherman Register Form</h1>
        <form
          className="container flex flex-col justify-center items-center mt-10 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input {...register("name")} type="text" placeholder="Full Name" />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}

          <Input {...register("email")} type="text" placeholder="Email" />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}

          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          <Input
            {...register("contact")}
            type="tel"
            placeholder="Contact Number"
          />
          {errors.contact && (
            <div className="text-red-500">{errors.contact.message}</div>
          )}

          <Input
            {...register("image", {
              required: "Lisence picture is required",
            })}
            type="file"
            placeholder="Upload Liscence"
          />

          {/* {errors.image && (
            <div className="text-red-500">{errors.image.message}</div>
          )} */}

          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>

          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FishermanRegister;

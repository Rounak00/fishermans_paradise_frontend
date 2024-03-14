import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { z } from "zod";
import { Input } from "../../components/ui/input";
import axios from "axios";
import { useToast } from "../../components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(1, { message: "Please Enter your Email" }),
  password: z.string().min(1, { message: "Please Enter your Email" }),
 
});

// const FormFields=z.infer<typeof schema>//only tsx

const AdminLogin = () => {
  const navigate=useNavigate();
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

     
      const res = await axios.post(
        `http://localhost:5000/api/auth/admin/login`,
        data
      );
      if(res.data){
         localStorage.setItem("user",JSON.stringify(res.data.user));
      }
      
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Internal Server Error",
      });
    }
  };

  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		setLoading(true);
  // 		try {
  // 			const res = await axios.get(`${process.env.REACT_APP_BASE_URL}` + url);
  // 			setData(res.data);
  // 		} catch (err) {
  // 			setError(err);
  // 		}
  // 		setLoading(false);
  // 	};
  // 	fetchData();
  // }, [url]);

  return (
    <div className="flex items-center justify-center">
      <div className="h-max flex flex-col md:w-1/2 p-4 justify-center items-center ">
        <h1 className="mt-10">Fisherman Login Form</h1>
        <form
          className="container flex flex-col justify-center items-center mt-10 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          

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

         

          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Login"}
          </Button>

          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

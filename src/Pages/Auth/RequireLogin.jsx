import { Link } from "react-router-dom";

const RequireLogin = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" mt-[10%] border-2 h-max flex flex-col md:w-1/2 p-4 justify-center items-center ">
          <h1 className='text-primary font-extrabold'>WELCOME</h1>  
          <h1 className="mt-10">Choose According</h1>

          <div className="container flex flex-col justify-center items-center mt-10 gap-4">
            {/*Contents*/}
            <Link to="/register">
              <div className="rounded-md bg-primary text-white hover:bg-primary/90 p-4">
                Customer Register / Log In
              </div>
            </Link>
            <Link to="/fisherman-register">
              <div className="rounded-md bg-primary hover:bg-primary/90 text-white p-4">
                Fisherman Register / Log In
              </div>
            </Link>
            <Link to="/admin-login">
              <div className="rounded-md bg-primary hover:bg-primary/90 text-white p-4">
                Admin Log In
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequireLogin;

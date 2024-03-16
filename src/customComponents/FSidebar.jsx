
import {
  FilePlus ,
    Fish
  } from "lucide-react";
  
  import LOGO from "../assets/Logo.svg"
  import { Link } from "react-router-dom";
  import { AuthContext } from "@/context/AuthContext";
  import { useContext } from "react";
  
  const FSidebar = () => {
    const { user } = useContext(AuthContext);
  
    return (
      <div>
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
        <div>Hello Fisherman, <span className='text-orange-700 font-semibold'>{user.name}</span> </div>
        
        
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
              
                
                <Link to="/fisherman"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <FilePlus className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Add Product</span>
                </Link>
                
              </div>
            </nav>
          </div>
          <Link href="/">
            <img src={LOGO} alt="Logo" />
          </Link>
        </aside>
      </div>
    );
  };
  
  export default FSidebar;
  
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/Logo.svg";
import AVATAR from "../assets/avatar.svg";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function NavBar() {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const Logout = () => {
    localStorage.removeItem("user");
    location.reload();
  };
  return (
    <>
      <div className="relative w-full bg-gray-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link to="/">
              <img width="150px" height="150px" src={LOGO} />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-flex font-bold  items-center text-gray-800 hover:text-gray-900"
                  >
                    {item.name === "Cart" ? (
                      <>
                        {item.name}({cart && cart.length})
                      </>
                    ) : (
                      <>{item.name}</>
                    )}
                  </Link>
                </li>
              ))} 
            </ul>
          </div>

          {user.role === "customer" && user.accessToken ? (
            <div className="flex flex-row gap-6">
              <div className="flex flex-col">
                <div className="text-center">Hello,</div>
                <div className="font-bold flex flex-row gap-1">
                  <span>
                    <img src={AVATAR} alt="AVATAR" className="h-7 w-7" />
                  </span>
                  {user.name}
                </div>
              </div>
              <Button className="bg-orange-700" onClick={Logout}>
                Log out
              </Button>
            </div>
          ) : (
            <div className="hidden space-x-2 lg:block">
              <Link to="/require">
                <button className="rounded-md bg-orange-700 hover:bg-orange-600 text-white px-3 py-2 text-sm font-semibold hover:bg-primary/9">
                  Sign Up
                </button>
              </Link>

              <Link to="/login">
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm"
                >
                  Log In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

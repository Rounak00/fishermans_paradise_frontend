import Footer from "@/customComponents/Footer";
import { NavBar } from "@/customComponents/NavBar";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <NavBar />
      <section className="m-10 overflow-x-hidden">
        <div className="h-full w-full flex gap-[100px] ml-[150px] ">
          <div className=" text-wrap border-b bg-white">
            <p className="text-3xl text-orange-700 font-bold">Explore Us </p>
            <p className="text-black text-5xl font-extrabold mt-5">
              Welcome To Fisherman's Paradise
            </p>
            <ul className="list-disc font-semibold text-gray-600 text-justify ml-7 mt-5">
              <li>
                <span className="font-extrabold text-orange-800">
                  Sustainable Harvesting:{" "}
                </span>
                <p>
                  {" "}
                  Responsible fishing practices to maintain healthy fish
                  populations and preserve marine ecosystems.
                </p>
              </li>
              <li>
                <span className="font-extrabold text-orange-800">
                  Community Support:{" "}
                </span>
                <p>
                  Contribute to local economies by providing fresh seafood and
                  supporting related industries such as processing and
                  distribution.
                </p>
              </li>
              <li>
                <span className="font-extrabold text-orange-800">
                  Environmental Stewardship:{" "}
                </span>
                <p>
                  Actively engage in efforts to reduce bycatch, minimize
                  environmental impact, and participate in marine conservation
                  initiatives.
                </p>
              </li>
              <li>
                <span className="font-extrabold text-orange-800">
                  Quality Assurance:{" "}
                </span>
                <p>
                  Ensure high-quality seafood by adhering to standards of
                  freshness, hygiene, and ethical sourcing.
                </p>
              </li>
            </ul>
            <Link to="/"><button className="h-11 w-40 bg-orange-500 hover:bg-orange-800 ml-2 mt-5 text-white font-bold rounded-lg">
              BUY PRODUCT
            </button></Link>
          </div>
          <div className="h-auto w-full flex flex-col gap-8">
            <div className="flex  gap-2">
              <div className="bg-orange-500 h-72 w-72 rounded-3xl shadow-lg flex justify-center items-center flex-col shadow-orange-900 text-white font-bold text-4xl text">
                <p>50+</p>
                <p className="pt-4">Fisherman</p>
              </div>
              <div></div>
            </div>
            <div className="flex gap-2 ">
              <div className="h-72 w-72"></div>
              <div className="bg-orange-500 h-72 w-72 rounded-3xl shadow-lg flex justify-center items-center flex-col shadow-orange-900 text-white font-bold text-4xl text">
                <p>100+</p>
                <p className="pt-4">Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 m-5 justify-center items-center text-justify ml-[120px]">
          <p className="text-3xl text-orange-700 font-bold"> Our Mission</p>
          <p className=" text-gray-600 text-base font-semibold ">
            <span className="text-3xl font-extrabold text-orange-700">"</span>Our
            mission is to sustainably harvest fish to provide food for
            communities while respecting the marine ecosystem, promoting
            conservation efforts, and ensuring the long-term viability of
            fisheries for future generations. To responsibly harvest seafood,
            contribute to local economies, promote environmental stewardship,
            and support the well-being of coastal communities. To serve as a
            comprehensive online platform catering to the diverse needs of
            anglers worldwide. This includes providing valuable resources such
            as fishing tips, techniques, gear reviews, and destination guides to
            empower and inspire fishing enthusiasts of all levels. Additionally,
            the website may aim to foster a supportive community where anglers
            can connect, share their experiences, and learn from one another.
            Ultimately, the mission is to enhance the fishing experience,
            promote conservation efforts.
            <span className="text-3xl font-extrabold text-orange-700 ">"</span>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

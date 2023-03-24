import React, { useState } from "react";
import swiggyLogo from "./swiggy-logo.svg";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import useLocation from "./hooks/useLocation";

function Header() {

    // const [location, setLocation] = useState({})

    
    // function handleLocation(){
    //     setLocation(useLocation())
    //     console.log(location)
    // }

    return (
        <div className=" flex items-center justify-between max-w-[1250px] min-w-[1250px] m-auto">
            <div className="flex items-center gap-6">
                <a href="/" className="hover:scale-110 transition-transform">
                    <img
                        className="p-2"
                        src={swiggyLogo}
                        alt="swiggy-logo"
                        aria-label="swiggy-logo"
                    />
                </a>
                <button className="flex items-center font-semibold text-sm text-gray-900">
                    <div className="inline-block border-b-2 border-black hover:text-orange-600 hover:border-orange-600 mr-3">
                        HOME
                    </div>
                    <div className="inline-block hover:text-orange-600">
                        <FiChevronDown size={17} />
                    </div>
                </button>
            </div>
            <div className="flex gap-14 mr-4">
                <span className=" hover:text-orange-600 hover:border-orange-600 cursor-pointer">
                    <BiSearch className="inline text-xl mr-2" />
                    <span>Search</span>
                </span>
                <span className=" hover:text-orange-600 hover:border-orange-600 cursor-pointer">
                    <MdOutlineLocalOffer className="inline text-xl mr-2" />
                    <span>Offers</span>
                </span>
                <span className=" hover:text-orange-600 hover:border-orange-600 cursor-pointer">
                    <IoHelpBuoyOutline className="inline text-xl mr-2" />
                    <span>Help</span>
                </span>
                <span className=" hover:text-orange-600 hover:border-orange-600 cursor-pointer">
                    <BsMinecart className="inline text-xl mr-2" />
                    <span>Cart</span>
                </span>
            </div>
        </div>
    );
}

export default Header;

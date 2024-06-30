import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="h-[10vh] w-full flex items-center justify-between p-4 relative">
            <img
                className="h-full w-auto"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt="Logo"
            />
            <div className="hidden lg:flex gap-x-5 md:gap-x-10 text-sm md:text-md items-center">
                <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200" to="/">
                    Home
                </Link>
                <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200" to="/recipes">
                    Recipes
                </Link>
                <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200" to="/about">
                    About
                </Link>
                <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200" to="/contact">
                    Contact
                </Link>
            </div>
            <i
                className="text-2xl md:text-3xl ri-grid-fill text-green-600 lg:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            ></i>
            {isOpen && (
                <div className="absolute top-[10vh] left-0 w-full bg-white flex flex-col items-center gap-y-5 py-5 lg:hidden z-10">
                    <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200 w-full text-center" to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200 w-full text-center" to="/recipes" onClick={() => setIsOpen(false)}>
                        Recipes
                    </Link>
                    <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200 w-full text-center" to="/about" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link className="hover:bg-green-100 py-2 px-4 rounded duration-200 w-full text-center" to="/contact" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;

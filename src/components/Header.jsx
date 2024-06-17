import { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {title: "BasketBall shoes", path:"/"},
        {title: "Causual Shoes", path:"/"},
        {title: "Running shoes", path:"/"},
        {title: "Weddind shoes", path:"/"},
        {title: "Sport", path:"/"},
        {title: "Snikers & casual", path:"/"},
       {title: "Office shoes", path:"/"}
     ]
    return(
        <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
            <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
                {/* search section */}
                {/* <div className="flex gap-2 items-center"> */}
                <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block"/>
                {/* <input type="text" placeholder="Search" className=""/> */}
                {/* </div> */}
                {/* website logo */}

                <a href="/"><img src="/public/logo.png" className="bg-white"/></a>

                {/* Account/Shopping */}

                <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
                    <a  className="flex items-center gap-2"><FaUser/>Account</a>
                    <a  className="flex items-center gap-2"><FaShoppingBag/>Shopping</a>
                </div>

                {/* Navbar for small devices */}

                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                       { isMenuOpen ? <FaTimes className="w-5 h-5 text-black"/> : <FaBars className="w-5 h-5 text-black"/> }
                    </button>

                </div>
            </nav>
            <hr/>

            {/* Category items */}

            <div className="pt-4">
                <ul className="lg:flex justify-between items-center text-black hidden">
                    {
                        navItems.map(({title}) => (
                            <li key={title} className="hover:text-orange-500">
                                <Link to="/">{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/*  Category items for small devices */}

            <div className="sm:hidden">
            <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" :"hidden"}`}>
            {
              navItems.map(({title}) => (
              <li key={title} className="my-3 cursor-pointer hover:text-orange-600">
                <Link to="/">{title}</Link>
              </li>
              ))
            }
          </ul>

        </div>  
        </header>
    )
}

export default Header;
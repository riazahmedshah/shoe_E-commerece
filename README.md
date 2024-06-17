# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



      {CREATING NAVBAR}
-->
    import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
    import logo from "/logo.png";
    import { Link } from "react-router-dom";
    import { useState } from "react";


  const Navbar = () => {
  const [isMenuOpen , setisMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setisMenuOpen(!isMenuOpen);
  }

   const navItems = [
     {title: "Jewelry & Accessories", path:"/"},
     {title: "Clothing & Shoes", path:"/"},
     {title: "Home & Living", path:"/"},
     {title: "Wedding & Party", path:"/"},
     {title: "Toys & Entertainment", path:"/"},
     {title: "Art & Collectibles", path:"/"},
    {title: "Craft Supplies & Tools", path:"/"}
  ]


  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch  className="text-Black w-5 h-5 cursor-pointer hidden md:block"/>
        {/* logo */}

        <a href="/"><img src={logo} alt="logo"/></a>

        {/* account and shopping btn */}

        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2"><FaUser/> Account</a>
          <a href="/" className="flex items-center gap-2"><FaShoppingBag/> shopping</a>
        </div>

        {/* navbar for small devices */}

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
          {
            
            isMenuOpen ? <FaTimes className="w-5 h-5 text-Black"/> : <FaBars className="w-5 h-5 text-Black"/>
          }
          </button>
        </div>
        </nav>

        <hr/>

        {/* category items */}

         <div className="pt-4">
          <ul className="lg:flex items-center justify-between text-Black hidden">
            {
              navItems.map(({title}) => (
              <li key={title} className="hover:text-orange-500">
                <Link to="/">{title}</Link>
              </li>
              ))
            }
          </ul>

        </div>

        {/* only mobile menu items */}

        <div>
          <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen? "" :"hidden"}`}>
            {
              navItems.map(({title}) => (
              <li key={title} className="hover:text-orange-500 my-3 cursor-pointer">
                <Link to="/">{title}</Link>
              </li>
              ))
            }
          </ul>

        </div> 
    </header>
  )
}

export default Navbar
<--

      {Banner}

-->
import { FaShoppingBag } from "react-icons/fa";
import banner from "/images/banner.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-primayBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        {/* image */}
        <div className="md:w-1/2">
          <img src={banner} alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-5">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <Link to="/shop"><button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className="inline-flex items-center"/>Shop Now
          </button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
<--

    {CATEGORY}

-->

  import { Link } from "react-router-dom"

const brandLogo = [
    {id:1, img: "/images/company/brand1.png"},
    {id:2, img: "/images/company/brand2.png"},
    {id:3, img: "/images/company/brand3.png"},
    {id:4, img: "/images/company/brand4.png"},
    {id:5, img: "/images/company/brand5.png"},
    
    
]
const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
        {/* Brand logo's */}
        <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {
            brandLogo.map(({id,img}) => (
                <div key={id} className=""><img src={img} alt=""/></div>
            ))
        }
        </div>

        {/* category grid */}
        
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <p className="font-semibold uppercase md:-rotate-90 text-center md:p-1.5 p-2 rounded-sm inline-flex">
                Explore new and popular styles
            </p>
            <div>
                <Link to="/"><img src="/images/category/image1.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/> </Link>
            </div>
            <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-2">
                    <Link to="/"><img src="/images/category/image2.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    <Link to="/"><img src="/images/category/image3.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    <Link to="/"><img src="/images/category/image4.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    <Link to="/"><img src="/images/category/image5.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category

<--


    { PRODUCTS PAGE }

-->

  import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import Cards from "../../components/Cards";



const Products = () => {

    const[products,setProducts] = useState([]);
    const[filteredItems ,setFilteredItems] = useState([]);    
    const[selectedCategeory ,setSelectedCategeory] = useState("all");    
    const[sortOption ,setSortOption] = useState("default");    


    useEffect(() => {
        const fetchData = async () =>{
        try {
            const response = await fetch("/products.json")
            const data = await response.json();
            setProducts(data);
            setFilteredItems(data);

        } catch (error) {
            console.log("Error fetching data:", error)
        }
    };
    fetchData();

    },[])
   // console.log(products)
        {/**Filtering function */}

        const filterItems = (category) => {
            const filtered = category === "all" ? products : products.filter((item) => item.category === category);
            setFilteredItems(filtered);
            setSelectedCategeory(category);

        }

        const showAll = ()=>{
            setFilteredItems(products);
            setSelectedCategeory("all")

        }

        {/** sorting functionality  */}

        const handleSortChange = (option) =>{
            setSortOption(option);

            // logic for sorting

            let sortedItems = [...filteredItems];

            switch (option) {
                case "A-Z":
                    sortedItems.sort((a,b) => a.title.localeCompare(b.title))
                    break;
                case "Z-A": sortedItems.sort((a,b) => b.title.localeCompare(a.title))
                    break;
                case "low-to-high" :
                    sortedItems.sort((a,b) => a.price - b.price);
                    break; 
                case "high-to-low" :
                    sortedItems.sort((a,b) => b.price - a.price);
                    break;       
            
                default:
                    break;
            }
            setFilteredItems(sortedItems);
        }
        
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12 mt-40">
        

        {/* product cards */}

        <div>
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
                {/*  all btn */}
                <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                    <button onClick={showAll} className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">All Products</button>
                    <button onClick={() => filterItems("Nike") } className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">NIKE</button>
                    <button onClick={() => filterItems("Adidas") } className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">ADIDAS</button>
                    <button onClick={() => filterItems("Puma") } className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">PUMA</button>
                </div>
                {/* sorting options */}

                <div className="flex justify-end mb-4 rounded-sm">
                    <div className="bg-black p-2">
                        <FaFilter className="text-white h-4 w-4"/>
                    </div>
                    <select
                     id="sort"
                     onChange={(e) => handleSortChange(e.target.value) }
                     value={sortOption}
                     className="bg-black text-white px-2 py-1 rounded-sm">
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High-to-Low</option>
                    </select>
                </div>
            </div>

             <Cards filteredItems={filteredItems}/>   

        </div>
    </div>
  )
}

export default Products
<--

<-- {BEST SELLER CATEGORY PAGE} -->
<!-- 
  
import  { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json").then(res => res.json()).then(data => setProducts(data));
    },[]);
    const bestSeller = products.filter((item) => item.status === "BestSelers");
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="text-center">
            <h2 className="title">Best sellers</h2>
            <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>

        </div>

        {/* best seller product card */}

        <div className='mb-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            bestSeller.map((products) => (
                <SwiperSlide key={products.id}>
                <Link to={`/shop/${products.id}`}>
                        <img src={products.image} className="mx-auto w-full hover:scale-105 transition-all duration-300"/>
                    </Link>
                    <div className="mt-4 px-4">
                        <h4 className="text-base font-semibold mb-2">{products.title}</h4>
                        <div>
                            <p className="text-black/50">{products.category}</p>
                            <p className="font-semibold">₹{products.price}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )) 
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BestSeller
 -->


<-- {NEWS LETTER} -->
 <!-- 
  import { Link } from "react-router-dom"


const Newsletter = () => {
  return (
    <div>
        <h2 className="title mb-8">Follow products and discount on Instagram</h2>
        {/* insta grid */}

        <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
            <Link to='/'>
                <img src="/images/instagram/img1.png" />
            </Link>
            <Link to='/'>
                <img src="/images/instagram/img2.png" />
            </Link>
            <Link to='/'>
                <img src="/images/instagram/img3.png" />
            </Link>
            <Link to='/'>
                <img src="/images/instagram/img4.png" />
            </Link>
            <Link to='/'>
                <img src="/images/instagram/img5.png" />
            </Link>
            <Link to='/'>
                <img src="/images/instagram/img6.png" />
            </Link>
        </div>

        {/* News letters */}

        <div>
            <h2 className="title mb-8">Or subscribe to the newslatter</h2>
            <form className="md:w-1/2 mx-auto text-center">
                <input type="email" name="email" id="email" placeholder="Email address..." className="h-8
                bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5
                placeholder:text-black/50 me-4"/>
                <input type="submit" value={"Submit"} className="bg-black text-white px-6 py-1 rounded-sm"/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
  -->

    {FOOTER SECTION}

  <!-- 
    import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-Black">
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-white/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-white">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-white">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-white">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
   -->
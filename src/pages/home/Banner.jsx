import { FaShoppingBag } from "react-icons/fa";
//import banner1 from "/images/banner1.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-gray-100 py-12  px-4">
      <div className="py-28  md:flex-row-reverse justify-between items-center gap-14 xl:relative">
        
          <img src="https://cdn.sanity.io/images/qa41whrn/prod/dc0ee4b670a4ae5ec5768aaf4cfc79c4d11e4dc1-6000x2167.jpg?w=2160&q=80&auto=format" />
        
        <div className="md:w-1/2 xl:absolute xl:top-1/2 xl:left-4 md:left-8 xl:transform xl:-translate-y-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-5">
            you can explore and shop many differnt collection from various
            barands here.
          </p>
          <Link to="/shop"><button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className="inline-flex items-center" /> Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// import { FaShoppingBag } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <div className="relative bg-gray-100 py-12 xl:px-28 px-4">
//       <div className="relative py-28 md:flex-row-reverse justify-between items-center gap-14">
//         <img
//           src="https://cdn.sanity.io/images/qa41whrn/prod/dc0ee4b670a4ae5ec5768aaf4cfc79c4d11e4dc1-6000x2167.jpg?w=2160&q=80&auto=format"
//           alt="Banner"
//           className="w-full"
//         />
//         <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 md:w-1/2">
//           <h1 className="text-5xl font-light mb-5 text-white">Collections</h1>
//           <p className="text-xl mb-5 text-white">
//             You can explore and shop many different collections from various
//             brands here.
//           </p>
//           <Link to="/shop">
//             <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
//               <FaShoppingBag className="inline-flex items-center" /> Shop Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



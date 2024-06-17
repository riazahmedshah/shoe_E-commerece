import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black">
        {/* footer top */}
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
            <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
                {/* COMPANY INFO */}
                <div className="md:w-[400px]">
                    <Link to="/">
                        <img src="/logo.png"/>
                    </Link>
                    <p className="my-8 text-white/75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <div className="flex items-center gap-6">
                        <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white"/>
                        <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white"/>
                        <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white"/>
                    </div>
                </div>
                {/* CATALOG */}
                <div className="text-white">
                    <h4 className="font-semibold mb-3">CATALOG</h4>
                    <div className="space-y-2">
                        <Link to="/shop" className="text-sm block hover:text-orange-500">All Products</Link>
                        <Link to="/shop" className="text-sm block hover:text-orange-500">Nike</Link>
                        <Link to="/shop" className="text-sm block hover:text-orange-500">Adidas</Link>
                        <Link to="/shop" className="text-sm block hover:text-orange-500">Puma</Link>
                        <Link to="/shop" className="text-sm block hover:text-orange-500">Decathon</Link>
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
  )
}

export default Footer
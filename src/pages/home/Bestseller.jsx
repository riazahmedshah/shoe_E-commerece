// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper/react';

const Bestseller = () => {
    const[products, SetProducts] = useState([]);
    useEffect(()=>{
        fetch("product.json").then(res => res.json())
        .then(data => SetProducts(data));
    },[]);
    const bestSeller = products.filter((item) => item.status === "Best Selers")
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='text-center'>
        <h2 className="text-3xl font-semibold capitalize text-center my-8">Best sellers</h2>
            <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>
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
                        <img src={products.image} className='mx-auto w-full
                        hover:scale-105 transition-all decoration-red-300'/>
                    </Link>
                    <div className='mt-4 px-4'>
                        <h4 className='text-base font-semibold mb-2'>
                            {products.title}
                        </h4>
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

export default Bestseller
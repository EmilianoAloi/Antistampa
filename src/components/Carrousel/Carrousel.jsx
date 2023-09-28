
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './Carrousel.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';



import Item from '../Item/Item';


const Carrousel = ({ products }) => {

    return (

        <>
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 5 }}
                slidesPerView={1}
                spaceBetween={0}
                speed={700}
                autoplay={{ delay: 700, disableOnInteraction: false }}

                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 2,
                    },
                }}
                className="mySwiper"
            >

                {products.map(prod =>
                    <SwiperSlide key={prod.id}><Item {...prod} /></SwiperSlide>
                )};


                <div className="slider-controler">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </>

    )
}

export default Carrousel
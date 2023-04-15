// import HeroImg from '../../assets/hero.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import  './Slider.css';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {SliderProducts} from '../../data/products';

const Slider = () => {
    return (
        <div className="s-container">
            <Swiper
            modules={[Pagination, Navigation]}
            className="mySiwper"

            navigation={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3} 
            spaceBetween={40} 
            slidesPerGroup={1} 
            loop={true}
            breakpoints={{
                0:{
                    slidesPerView: 1
                },
                640:{
                    slidesPerView: 3
                }

            }}>

                    {SliderProducts.map((slide,index)=>(
                        <SwiperSlide key={index}>
                            <div className="left-s">
                                <div className="name">
                                <span>
                                    {slide.name}
                                </span>
                                <span>
                                    {slide.detail}
                                </span>

                                </div>

                                <span>{slide.price} $</span>
                                
                                <div style={{cursor:"pointer"}}>Show Now</div>


                                <img src={slide.img} alt='product' className="img-p"/>

                            </div>

                        </SwiperSlide>
                    ))}

            </Swiper>

        </div>
    )
}

export default Slider

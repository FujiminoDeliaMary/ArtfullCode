// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import photo from "../assets/membre.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {


  return (
    <Swiper
    // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
  
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
  >
      <SwiperSlide className='slide'><img src={photo} alt="" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={photo} alt="" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={photo} alt="" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={photo} alt="" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={photo} alt="" /></SwiperSlide>
  
    </Swiper>
  );
};

export default Services;
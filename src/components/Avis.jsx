import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

const Avis = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                coverflowEffect={{
                    rotate: 7,
                    stretch: 0,
                    depth: 800,
                    modifier: 1,
                    slideShadows: false,
                }}
                navigation={true}
                pagination={false}
                modules={[EffectCoverflow, Navigation]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <aside class="card">
                        <img src="images/Group10.png" alt="" class="cardimage" />
                        <h2 class="cardnom">Marc Vido</h2>
                        <h3 class="cardjob">
                            Gestionnaire Service Public
                        </h3>
                        <p class="cardavis">
                            "Très satisfait des services proposés par l'équipe d'ArtFull Code.
                            Je me suis senti bien accompagné du début à la fin."
                        </p>
                        <ul class="card__notes">
                            <li>
                                test 1
                            </li>
                            <li>
                                test
                            </li>

                        </ul>
                    </aside>
                </SwiperSlide>
                <SwiperSlide>

                    <aside class="card">
                        <img src="images/Group10.png" alt="" class="cardimage" />
                        <h2 class="cardnom">Marc Vido</h2>
                        <h3 class="cardjob">
                            Gestionnaire Service Public
                        </h3>
                        <p class="cardavis">
                            "Très satisfait des services proposés par l'équipe d'ArtFull Code.
                            Je me suis senti bien accompagné du début à la fin."
                        </p>
                        <ul class="card__notes">
                            <li>
                                test 2
                            </li>
                            <li>
                                test
                            </li>

                        </ul>
                    </aside>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
export default Avis;
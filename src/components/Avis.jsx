import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
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
                                test
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
                                test
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

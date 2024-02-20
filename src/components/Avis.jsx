// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

// import avis
import avisHomme from "../assets/avis/avatar-homme.png"
import avisHomme2 from "../assets/avis/avatar-homme2.png"
import avisHomme3 from "../assets/avis/avatar-homme3.png"
import avisHomme4 from "../assets/avis/avatar-homme4.png"
import avisFemme from "../assets/avis/avatar-femme.png"
import avisFemme2 from "../assets/avis/avatar-femme2.png"
import avisFemme3 from "../assets/avis/avatar-femme3.png"
import avisFemme4 from "../assets/avis/avatar-femme4.png"


import { useRef } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';


const Avis = () => {
    const container = useRef();


    return (

        <><section className='avis'>

            <h2 className="avis__title">Quelques avis de nos clients les plus satisfaits</h2>
            <Swiper
                // effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
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
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

                navigation={false}
                // pagination={true}    
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}

                modules={[EffectCoverflow, Navigation, Pagination]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <aside class="card">
                        <p class="card__notes">
                            <IoStar size={20} color='#d27c2c' /><IoStar size={20} color='#d27c2c' /><IoStar size={20} color='#d27c2c' />
                            <IoStarOutline size={20} color='#d27c2c' /> <IoStarOutline size={20} color='#d27c2c' />
                        </p> <p class="card__avis">
                            "Très satisfait des services proposés par l'équipe d'ArtFull Code.
                            Je me suis senti bien accompagné du début à la fin."
                        </p>

                        <figure className='card__description'>
                            <img src={avisHomme} alt="" className="card__image" />
                            <figcaption className='card__legende'>
                                <h2 class="card__nom">Marc Vido</h2>
                                <h3 class="card__job">
                                    Gestionnaire Service Public
                                </h3>
                            </figcaption>

                        </figure>

                    </aside>

                </SwiperSlide>
                <SwiperSlide>
                    <aside class="card">
                        <ul class="card__notes">
                            <li>
                                <IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStarHalf size={25} color='#d27c2c' /> <IoStarOutline size={25} color='#d27c2c' />
                            </li>
                        </ul>
                        <p class="card__avis">
                            "Leur capacité à comprendre mes besoins a abouti à des services impeccables.
                            Je recommande vivement leur expertise à tous ceux qui recherchent un service client
                            exceptionnel et sur mesure."
                        </p>

                        <figure className='card__description'>
                            <img src={avisHomme2} alt="" class="card__image" />
                            <figcaption className='card__legende'>
                                <h2 class="card__nom">Pierre Olivier</h2>
                                <h3 class="card__job"> Gérant d'une association animalière
                                </h3>
                            </figcaption>
                        </figure>



                    </aside>

                </SwiperSlide>
                <SwiperSlide>
                    <aside class="card">
                        <ul class="card__notes">
                            <li>    <IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /> <IoStar size={25} color='#d27c2c' /> <IoStarOutline size={25} color='#d27c2c' /> </li>

                        </ul>
                        <p class="card__avis">
                            "Je recommande vivement leurs services à toute entreprise cherchant
                            à élever le niveau de sa formation en ligne."
                        </p>

                        <figure className='card__description'>
                            <img src={avisFemme} alt="" class="card__image" />
                            <figcaption className='card__legende'>
                                <h2 class="card__nom">Jasmine Marki</h2>
                                <h3 class="card__job"> Co-gérante de la statup MineDiv
                                </h3>
                            </figcaption>
                        </figure>


                    </aside>
                </SwiperSlide>

                <SwiperSlide>
                    <aside class="card">
                        <ul class="card__notes">
                            <li>  <IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStarOutline size={25} color='#d27c2c' /> </li>

                        </ul>  <p class="card__avis">
                            "Je recommande vivement l'agence ArtFull Code à toute personne en quête d'un service clientèle de haute qualité.
                            Chaque membre de l'équipe a été à l'écoute de mes besoins."
                        </p>
                        <figure className='card__description'>
                            <img src={avisFemme2} alt="" class="card__image" />
                            <figcaption className='card__legende'>
                                <h2 class="card__nom">Elise Tellier</h2>
                                <h3 class="card__job">Directrice d'une organisation à but non lucratif</h3>

                            </figcaption>
                        </figure>

                    </aside>
                </SwiperSlide>

                <SwiperSlide>

                    <aside class="card">
                        <ul class="card__notes">
                            <li>  <IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStarHalf size={25} color='#d27c2c' />  </li>

                        </ul>
                        <p class="card__avis">
                            "Mon projet à été mené à bien du début à la fin.
                            Bonne communication et collaboration, avec tout les membres de l'équipe. Merci !"
                        </p>

                        <figure className='card__description'>
                            <img src={avisHomme3} alt="" class="card__image" />
                            <figcaption className='card__legende'>
                                <h2 class="card__nom">François Dubois</h2>
                                <h3 class="card__job">Enseignant au sein d'un Centre Pénitencier</h3>
                            </figcaption>
                        </figure>


                    </aside>
                </SwiperSlide>
                <SwiperSlide>
                    <aside class="card">
                        <ul class="card__notes">
                            <li>  <IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStarOutline size={25} color='#d27c2c' /><IoStarOutline size={25} color='#d27c2c' /> </li>

                        </ul>
                        <p class="card__avis">
                            "Équipe très rassurante à l'écoute de son client,
                            je suis aujourd'hui pleinement satisfait des prestations de cette Agence. Je la recommande !"
                        </p>
                        <figure className='card__description'>
                            <img src={avisFemme3} alt="" class="card__image" />

                            <figcaption className='card__legende'>
                                <h2 class="card__nom">Marina Satère</h2>
                                <h3 class="card__job">Gérante pharmaceutique</h3>
                            </figcaption>
                        </figure>

                    </aside>
                </SwiperSlide>
                <SwiperSlide>
                    <aside class="card">
                        <ul class="card__notes">
                            <li>  <IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /><IoStar size={25} color='#d27c2c' /> <IoStarHalf size={25} color='#d27c2c' />  </li>

                        </ul>   <p class="card__avis">
                            "Je suis satisfait par les services de l'Agence Artfull Code,
                            merci à eux pour leur professionnalisme et leur écoute attentive.
                            Leurs services ont dépassé mes attentes !"
                        </p>
                        <figure className='card__description'>
                            <img src={avisHomme4} alt="" class="card__image" />
                            <figcaption className='card__legende'>
                                <h2 class="card__nom">Thomas Guy</h2>
                                <h3 class="card__job">
                                    Directeur de l'Agence Technoweb
                                </h3>

                            </figcaption>
                        </figure>



                    </aside>
                </SwiperSlide>
            </Swiper>
        </section>

        </>

    );
}
export default Avis;
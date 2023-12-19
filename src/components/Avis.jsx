import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Avis = () => {

    return <>

        {/* nos avis  */}
        <section class="avis">
            <h2 class="avis__titre">Quelques <span>avis</span> de nos clients</h2>

            {/* Swiper */}
            <article class="carousel">
                <div class="swiper swipClass mySwiper">
                    <div class="swipClass__wrap swiper-wrapper">
                        <div class="swipClass__slide swiper-slide">
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
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/frog.png" alt="" class="cardimage" />
                                <h2 class="cardnom">Jasmine Marki</h2>
                                <h3 class="cardjob"> Co-gérante de la statup MineDiv
                                </h3>
                                <p class="cardavis">
                                    "Je recommande vivement leurs services à toute entreprise cherchant
                                    à élever le niveau de sa formation en ligne."
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/Group 8.png" alt="" class="cardimage" />
                                <h2 class="cardnom">Solène Bouvier</h2>
                                <h3 class="cardjob">Fleuriste
                                </h3>
                                <p class="cardavis">
                                    "Je suis satisfait par les services de l'Agence Artfull Code,
                                    merci à eux pour leur professionnalisme et leur écoute attentive.
                                    Leurs services ont dépassé mes attentes."
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/*    <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/Group 7.png" alt="" class="cardimage" />
                                <h2 class="cardnom">Pierre Olivier</h2>
                                <h3 class="cardjob"> Gérante d'une association animalière
                                </h3>
                                <p class="cardavis">
                                    "Leur capacité à comprendre mes besoins a abouti à des services impeccables.
                                    Je recommande vivement leur expertise à tous ceux qui recherchent un service client
                                    exceptionnel et sur mesure."
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/Logo.png" alt="" class="cardimage" />
                                <h2 class="cardnom">Elise Tellier</h2>
                                <h3 class="cardjob">Directrice d'une organisation à but non lucratif</h3>
                                <p class="cardavis">
                                    "Je recommande vivement l'agence ArtFull Code à toute personne en quête d'un service clientèle de haute qualité.
                                    Chaque membre de l'équipe a été à l'écoute de mes besoins."
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/frog.png" alt="" class="cardimage" />
                                <h2 class="cardnom">François Dubois</h2>
                                <h3 class="cardjob">Enseignant au sein d'un Centre Pénitencier</h3>
                                <p class="cardavis">
                                    "Mon projet à été mené à bien du début à la fin.
                                    Bonne communication et collaboration, avec tout les membres de l'équipe. Merci !"
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/frog.png" alt="" class="cardimage" />
                                <h2 class="cardnom">Marina Satère</h2>
                                <h3 class="cardjob">Gérante pharmaceutique</h3>
                                <p class="cardavis">
                                    "Équipe très rassurante à l'écoute de son client,
                                    je suis aujourd'hui pleinement satisfait des prestations de cette Agence. Je la recommande !"
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="swipClass__slide swiper-slide">
                            <aside class="card">
                                <img src="images/photo1.jpeg" alt="" class="cardimage" />
                                <h2 class="cardnom">Thomas Guy</h2>
                                <h3 class="cardjob">
                                    Directeur de l'Agence Technoweb
                                </h3>
                                <p class="cardavis">
                                    "Je suis satisfait par les services de l'Agence Artfull Code,
                                    merci à eux pour leur professionnalisme et leur écoute attentive.
                                    Leurs services ont dépassé mes attentes !"
                                </p>
                                <ul class="card__notes">
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #d27c2c"></i> */}
                                    </li>
                                    <li>
                                        {/* <i class="fa-sharp fa-solid fa-star fa-lg" style="color: #ffffff"></i> */}
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <aside class="swiper__buttons">
                        <div class="swiper-button-next swiper__next swiper__next"></div>
                        <div class="swiper-button-prev swiper__prev swiper__prev"></div>

                    </aside>
                </div>
            </article>
        </section>

    </>
}
export default Avis;
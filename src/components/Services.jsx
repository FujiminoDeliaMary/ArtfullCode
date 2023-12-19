// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import service from '../assets/services/seo_image.png';
import icone from '../assets/services/seo_icone.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {



  return (
    <section class="services" id="services">
        <h2 className='services__title'>Quelques uns de nos services</h2>
    <Swiper className='swiper_container'
    // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
  
        pagination={false}
  >
          
           
                <SwiperSlide>

                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={icone} alt="" class="services__icone" />
                          <h3>Référencement seo</h3>
                        </div>
                        <p className='services__content'>
                          Le référencement SEO, ou Search Engine Optimization, est un
                          ensemble de techniques visant à optimiser la visibilité d'un
                          site web sur les moteurs de recherche tels que Google.
                          L'objectif principal du SEO est d'obtenir un meilleur
                          classement dans les résultats de recherche organiques afin
                          d'attirer un trafic qualifié et pertinent sur votre site.
                          Le SEO se divise en deux grandes catégories : le
                          référencement on-page et le référencement off-page. Le
                          référencement on-page concerne l'optimisation des éléments
                          directement liés à votre site web, tels que les mots-clés,
                          la structure du site, le contenu, les balises méta, les
                          images optimisées, etc.
                        </p>
                      </figcaption>
                      <img src={service} alt="" class="services__image" />
                    </figure>

                </SwiperSlide>

                <SwiperSlide>
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={icone} alt="" class="services__icone" />
                          <h3>Maintenance et support technique</h3>
                        </div>
                        <p className='services__content'>
                          Le référencement SEO, ou Search Engine Optimization, est un
                          ensemble de techniques visant à optimiser la visibilité d'un
                          site web sur les moteurs de recherche tels que Google.
                          L'objectif principal du SEO est d'obtenir un meilleur
                          classement dans les résultats de recherche organiques afin
                          d'attirer un trafic qualifié et pertinent sur votre site.
                          Le SEO se divise en deux grandes catégories : le
                          référencement on-page et le référencement off-page. Le
                          référencement on-page concerne l'optimisation des éléments
                          directement liés à votre site web, tels que les mots-clés,
                          la structure du site, le contenu, les balises méta, les
                          images optimisées, etc.
                        </p>
                      </figcaption>
                      <img src={service} alt="" class="services__image" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>

                <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={icone} alt="" class="services__icone" />
                          <h3>Formation Client</h3>
                        </div>
                      <p className='services__content'>
                        Le référencement SEO, ou Search Engine Optimization, est un
                        ensemble de techniques visant à optimiser la visibilité d'un
                        site web sur les moteurs de recherche tels que Google.
                        L'objectif principal du SEO est d'obtenir un meilleur
                        classement dans les résultats de recherche organiques afin
                        d'attirer un trafic qualifié et pertinent sur votre site.
                        Le SEO se divise en deux grandes catégories : le
                        référencement on-page et le référencement off-page. Le
                        référencement on-page concerne l'optimisation des éléments
                        directement liés à votre site web, tels que les mots-clés,
                        la structure du site, le contenu, les balises méta, les
                        images optimisées, etc.
                      </p>
                    </figcaption>
                    <img src={service} alt="" class="services__image" />
                  </figure>

                </SwiperSlide>
                <SwiperSlide>
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={icone} alt="" class="services__icone" />
                          <h3>UI/UX Design</h3>
                        </div>
                        <p className='services__content'>
                          Le référencement SEO, ou Search Engine Optimization, est un
                          ensemble de techniques visant à optimiser la visibilité d'un
                          site web sur les moteurs de recherche tels que Google.
                          L'objectif principal du SEO est d'obtenir un meilleur
                          classement dans les résultats de recherche organiques afin
                          d'attirer un trafic qualifié et pertinent sur votre site.
                          Le SEO se divise en deux grandes catégories : le
                          référencement on-page et le référencement off-page. Le
                          référencement on-page concerne l'optimisation des éléments
                          directement liés à votre site web, tels que les mots-clés,
                          la structure du site, le contenu, les balises méta, les
                          images optimisées, etc.
                        </p>
                      </figcaption>
                      <img src={service} alt="" class="services__image" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={icone} alt="" class="services__icone" />
                          <h3>Responsive design</h3>
                        </div>
                      <p className='services__content'>
                        Le référencement SEO, ou Search Engine Optimization, est un
                        ensemble de techniques visant à optimiser la visibilité d'un
                        site web sur les moteurs de recherche tels que Google.
                        L'objectif principal du SEO est d'obtenir un meilleur
                        classement dans les résultats de recherche organiques afin
                        d'attirer un trafic qualifié et pertinent sur votre site.
                        Le SEO se divise en deux grandes catégories : le
                        référencement on-page et le référencement off-page. Le
                        référencement on-page concerne l'optimisation des éléments
                        directement liés à votre site web, tels que les mots-clés,
                        la structure du site, le contenu, les balises méta, les
                        images optimisées, etc.
                      </p>
                    </figcaption>
                    <img src={service} alt="" class="services__image" />
                  </figure>
                  </SwiperSlide>
  
    </Swiper>
    </section>
  );
};

export default Services;
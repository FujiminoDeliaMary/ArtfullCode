// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageresponsive from '../assets/services/image-responsive.jpeg';
import imageseo from '../assets/services/image-seo.jpg';
import imageux from '../assets/services/image-ux.jpg';
import imagetechnique from '../assets/services/image-technique.jpg';
import imageformation from '../assets/services/image-formation.jpg';
import uxIcone from '../assets/services/uxIcone.png';
import uxImage from '../assets/services/uxImage.jpg';
import seoicone from '../assets/services/seo_icone.png';
import maintenanceIcone from '../assets/services/maintenanceIcone.png';
import formationIcone from '../assets/services/formationIcone.png';
import responsiveIcone from '../assets/services/responsiveIcone.png';

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
                          <img src={seoicone} alt="" class="services__icone" />
                          <h3>Référencement seo</h3>
                        </div>
                        <p className='services__content'>
                        Maximisez votre visibilité en ligne grâce à notre services de référencement. 
                        Nous optimisons votre site pour les moteurs de recherche, mettons en place des stratégies
                        de mots-clés efficaces et veillons à ce que votre site soit classé en tête des résultats pertinents.

                        </p>
                      </figcaption>
                      <img src={imageseo} alt="" class="services__icone" />
                    </figure>

                </SwiperSlide>

                <SwiperSlide>
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={maintenanceIcone} alt="" class="services__icone" />
                          <h3>Maintenance et support technique</h3>
                        </div>
                        <p className='services__content'>
                          Le référencement SEO, ou Search Engine Optimization, est un
                          ensemble de techniques visant à optimiser la visibilité d'un
                          site web sur les moteurs de recherche tels que Google.
                          L'objectif principal du SEO est d'obtenir un meilleur
                          classement dans les résultats de recherche organiques afin
                          d'attirer un trafic qualifié et pertinent sur votre site.
                   
                        </p>
                      </figcaption>
                      <img src={imagetechnique} alt="" class="services__icone"/>
                    </figure>
                </SwiperSlide>

                <SwiperSlide>

                <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={formationIcone} alt="" class="services__icone" />
                          <h3>Formation Client</h3>
                        </div>
                      <p className='services__content'>
                      Du concept à la réalité, notre équipe de développeurs assure la création de sites web,
                      évolutifs et conformes aux normes les plus récentes. Nous maîtrisons une variété de technologies pour répondre à vos besoins spécifiques, 
                      assurant une performance optimale sur toutes les plateformes.

                      </p>
                    </figcaption>
                    <img src={imageformation} alt="" class="services__icone" />
                  </figure>

                </SwiperSlide>
                <SwiperSlide>
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={uxIcone} alt="" class="services__icone" />
                          <h3>UI/UX Design</h3>
                        </div>
                        <p className='services__content'>
                        L'expérience utilisateur est une priorité chez nous. 
                        Nous débutons chaque projet par une analyse de vos utilisateurs potentiels,
                        créant des personas détaillées et concevant des parcours utilisateur intuitifs.
                        Notre approche centrée sur l'utilisateur garantit que chaque interaction sur votre site est non seulement agréable,
                        mais aussi alignée sur vos objectifs.

                        </p>
                      </figcaption>
                      <img src={imageux} alt="" class="services__icone" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={responsiveIcone} alt="" class="services__icone" />
                          <h3>Responsive design</h3>
                        </div>
                      <p className='services__content'>
                          Notre équipe de designers transforme vos concepts en réalité visuelle.
                          Le webdesign ne se contente pas d'être esthétique, il est fonctionnel. 
                          Chaque élément visuel est soigneusement élaboré pour refléter votre identité de marque tout en 
                          offrant une expérience visuelle immersive et engageante.
                      </p>
                    </figcaption>
                    <img src={imageresponsive} alt="" class="services__icone"/>
                  </figure>
                  </SwiperSlide>
  
    </Swiper>
    </section>
  );
};

export default Services;
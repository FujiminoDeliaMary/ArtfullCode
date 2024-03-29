// Import Swiper React components
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import service from '../assets/services/seo_image.png';
import iconeSeo from '../assets/services/seo_icone.png';
import iconeUx from '../assets/services/uxIcone.png'
import iconeMaintenance from '../assets/services/maintenanceIcone.png'
import iconeClient from '../assets/services/formationIcone.png'
// Import des images
import imageFormation from '../assets/services/image-formation.jpg'
import imageUx from '../assets/services/image-ux.jpg'
import imageMaintenance from '../assets/services/imageMaintenance.png'
import imageWebDesign from '../assets/services/image-responsive.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



const Services = () => {



  return (
    <section class="services" id="services">
      <h2 className='services__title'>Quelques uns de nos services</h2>
      <Swiper className='swiper_container'
        // install Swiper modules
        modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        navigation
        autoplay={{ delay: 3000 }}
        
        pagination={false}
      >
        <div className="swiper-wrapper"></div>

          <SwiperSlide className="swiper-slide">
                  <figure className='services__service'>
                      <figcaption>
                        <div class="services__serviceTitle">
                          <img src={iconeSeo} alt="" class="services__icone" />
                          <h3>Référencement seo</h3>
                        </div>
                        <p className='services__content'>
                        Maximisez votre visibilité en ligne grâce à notre services de référencement. 
                        Nous optimisons votre site pour les moteurs de recherche, mettons en place des stratégies
                        de mots-clés efficaces et veillons à ce que votre site soit classé en tête des résultats pertinents.

                        </p>
                      </figcaption>
                      <img src={service} alt="" class="services__image" />
                    </figure>
          </SwiperSlide>


          <SwiperSlide className="swiper-slide">
            <figure className='services__service'>
              <figcaption>
                <div class="services__serviceTitle">
                  <img src={iconeMaintenance} alt="" class="services__icone" />
                  <h3>Maintenance et support technique</h3>
                </div>
                <p className='services__content'>
                Nous nous engageons à <strong>maintenir votre site à jour</strong> avec les <strong>dernières fonctionnalités</strong> assurant une compatibilité optimale au fil des années, pour cela, nous établisons des contrats de maintenance adaptables selon vos besoins.
                Notre équipe interviendras'il y a de petits bugs pour qu'il ne devienne pas un obstacle dangereux et pour garantir 

                </p>
              </figcaption>
              <img src={imageMaintenance} alt="" class="services__image" />
            </figure>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">

            <figure className='services__service'>
              <figcaption>
                <div class="services__serviceTitle">
                  <img src={iconeClient} alt="" class="services__icone" />
                  <h3>Formation et Support</h3>
                </div>
                <p className='services__content'>
                Chez <strong>ArtFull Code</strong>, nous ne nous contentons pas de créer des sites web exceptionnels,
                nous nous engageons également à vous fournir les compétences nécessaires pour en tirer le meilleur parti.
                Nos <strong>services de formation et de support</strong> sont conçus pour vous aider à prendre en main votre présence en ligne de manière autonome.

                </p>
              </figcaption>
              <img src={imageFormation} alt="" class="services__image" />
            </figure>

          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <figure className='services__service'>
              <figcaption>
                <div class="services__serviceTitle">
                  <img src={iconeUx} alt="" class="services__icone" />
                  <h3>UI/UX Design</h3>
                </div>
                <p className='services__content'>
                  <strong>L'expérience utilisateur</strong> est une priorité chez nous.
                  Nous débutons chaque projet par une analyse de vos utilisateurs potentiels,
                  créant des personas détaillées et concevant des parcours utilisateur intuitifs.
                  Notre approche centrée sur l'utilisateur garantit que chaque interaction sur votre site soit agréable.

                </p>
              </figcaption>
              <img src={imageUx} alt="" class="services__image" />
            </figure>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <figure className='services__service'>
              <figcaption>
                <div class="services__serviceTitle">
                  <img src={iconeSeo} alt="" class="services__icone" />
                  <h3>Responsive Web Design </h3>
                </div>
                <p className='services__content'>
                  Notre équipe de designers transforme vos concepts en réalité visuelle.
                  Le webdesign ne se contente pas d'être esthétique, il est fonctionnel.
                  Chaque élément visuel est <strong>soigneusement élaboré</strong> pour refléter votre identité de marque tout en
                  offrant une expérience visuelle immersive et engageante.

                </p>
              </figcaption>
              <img src={imageWebDesign} alt="" class="services__image" />
            </figure>
          </SwiperSlide>
      <div/>
      </Swiper>
    </section>
  );
};

export default Services;
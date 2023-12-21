// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
import webdesign from '../assets/services/webdesign.jpg'

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
                          <img src={iconeSeo} alt="" class="services__icone"/>
                          <h3>Référencement seo</h3>
                        </div>
                        <p className='services__content'>
                        Maximisez votre <strong className="strong"> visibilité</strong> en ligne grâce à notre <strong className="strong">service de référencement. </strong> 
                        Nous <strong className='strong'> optimisons </strong>votre site pour les moteurs de recherche, mettons en place des <strong className='strong'> stratégies </strong>
                        de mots-clés <strong className='strong'>efficaces</strong> et veillons à ce que votre site soit classé en tête des résultats pertinents.
                        </p>
                      </figcaption>
                      <img src={service} alt="" class="services__image"/>
                    </figure>
          </SwiperSlide>


        <SwiperSlide>
          <figure className='services__service'>
            <figcaption>
              <div class="services__serviceTitle">
                <img src={iconeMaintenance} alt="" class="services__icone" />
                <h3>Maintenance et support technique</h3>
              </div>
              <p className='services__content'>
              Nous nous engageons à <strong className='strong'>maintenir votre site à jour</strong> avec les <strong className='strong'>dernières fonctionnalités </strong> 
              assurant une <strong className='strong'>compatibilité optimale</strong> au fil des années. Pour cela, nous établisons des contrats de maintenance adaptables selon vos besoins.
              Notre équipe interviendra en cas de disfonctionnement afin de <strong className='strong'>garantir la sécurité de votre site.</strong>
              </p>
            </figcaption>
            <img src={imageMaintenance} alt="" class="services__image" />
          </figure>
        </SwiperSlide>

        <SwiperSlide>

          <figure className='services__service'>
            <figcaption>
              <div class="services__serviceTitle">
                <img src={iconeClient} alt="" class="services__icone" />
                <h3>Formation et Support</h3>
              </div>
              <p className='services__content'>
              Chez <strong className='strong'>ArtFull Code</strong>, nous ne nous contentons pas de créer des sites web exceptionnels,
              nous nous engageons également à vous fournir les <strong className='strong'>compétences nécessaires</strong> pour en tirer le meilleur parti.
              Nos <strong className='strong'> services de formation et de support </strong> sont conçus pour vous aider à prendre en main votre présence en ligne de <strong className='strong'>manière autonome</strong>.

              </p>
            </figcaption>
            <img src={imageFormation} alt="" class="services__image" />
          </figure>

        </SwiperSlide>
        <SwiperSlide>
          <figure className='services__service'>
            <figcaption>
              <div class="services__serviceTitle">
                <img src={iconeUx} alt="" class="services__icone" />
                <h3>UI/UX Design</h3>
              </div>
              <p className='services__content'>
                <strong className='strong'>L'expérience utilisateur</strong> est une priorité chez nous.
                Nous débutons chaque projet par une analyse de <strong className='strong'>vos utilisateurs potentiels</strong>,
                créant des personas détaillées et concevant des parcours utilisateur intuitifs.
                Notre approche centrée sur l'utilisateur garantit que chaque interaction sur votre site est non seulement agréable,
                mais aussi alignée sur <strong className='strong'>vos objectifs</strong>.

              </p>
            </figcaption>
            <img src={imageUx} alt="" class="services__image" />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <figure className='services__service'>
            <figcaption>
              <div class="services__serviceTitle">
                <img src={iconeSeo} alt="" class="services__icone" />
                <h3>Web Design </h3>
              </div>
              <p className='services__content'>
                Notre équipe de designers transforme vos concepts en <strong className='strong'>réalité visuelle.</strong>
                Le <strong className='strong'>webdesign</strong> ne se contente pas d'être esthétique, il est fonctionnel.
                Chaque élément visuel est soigneusement élaboré pour refléter votre <strong className='strong'>identité de marque</strong> tout en
                offrant une expérience visuelle <strong className='strong'>immersive</strong> et <strong className='strong'>engageante.</strong>

              </p>
            </figcaption>
            <img src={webdesign} alt="" class="services__image" />
          </figure>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Services;
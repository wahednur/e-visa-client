import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "/img/slide1.jpg";
import img2 from "/img/slide2.png";
import img3 from "/img/slide3.jpg";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, A11y]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className={`slider bg-[url(/img/slide1.jpg)] w-full aspect-slider bg-cover bg-no-repeat bg-top`}
        >
          <div className="container h-full">
            <div className="w-full lg:w-7/12 flex justify-center h-full flex-col space-y-5 text-white animate__animated animate__fadeInLeft">
              <h1 className="sec-title text-white leading-tight">
                Best Immigration & Visa Consultation
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered services Company
              </p>
              <div>
                <button className="btn uppercase">Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`slider-2 bg-[url(/img/slide2.png)] w-full aspect-slider bg-contain bg-no-repeat animate__animated animate__fadeInRight`}
        >
          <div className="container flex h-full">
            <div className="w-5/12 hidden lg:block"></div>
            <div className="w-full lg:w-7/12 flex justify-center h-full flex-col space-y-5 text-white animate__animated animate__fadeInLeft">
              <h1 className="sec-title text-white leading-tight">
                We are professional Expert in Immigration
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered services Company
              </p>
              <div>
                <button className="btn uppercase">Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`bg-[url(/img/slide3.jpg)] w-full aspect-slider bg-cover bg-no-repeat animate__animated animate__fadeInRight`}
        >
          <div className="container flex h-full">
            <div className="w-full lg:w-7/12 flex justify-center h-full flex-col space-y-5 text-white animate__animated animate__fadeInLeft">
              <h1 className="sec-title text-white leading-tight">
                We are professional Expert in Immigration
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered services Company
              </p>
              <div>
                <button className="btn uppercase">Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

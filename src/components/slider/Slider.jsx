import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "/img/slide1.jpg";
import img2 from "/img/slide2.png";
import img3 from "/img/slide3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, A11y]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className={`bg-[url(${img1})] w-full aspect-slider bg-cover bg-no-repeat animate__animated animate__fadeInRight`}
        >
          <div className="w-full lg:w-7/12 items-center h-full">
            <h1>Best Immigration & Visa Consultation</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

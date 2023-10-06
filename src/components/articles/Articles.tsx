// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Articles = () => {
  const swiperSlide = "bg-center bg-cover w-[300px] h-[300px]";
  const swiperSlideImage = "block w-full";
  return (
    <section id="articles" className="mb-16">
      <h1 className=" max-[600px]:mx-3">Featured Articles📝</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-[50px]"
      >
        <SwiperSlide className={swiperSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className={swiperSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className={swiperSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className={swiperSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className={swiperSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className={swiperSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className={swiperSlideImage}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Articles;
